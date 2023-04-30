const router = require('express').Router()
const fs = require('fs')
const bcrypt = require('bcryptjs')
const uuid = require('uuid')
const jwt = require('jsonwebtoken')


function getJsonDatabase(callback) {
    fs.readFile('users.json', function (err, data) {
        if (err) {
            console.error(err)
            return callback(err)
        }

        let jsonDatabase = JSON.parse(data)
        if (!Array.isArray(jsonDatabase)) {
            jsonDatabase = [jsonDatabase] // Certifica-se de que os usuários estejam em um array
        }

        callback(null, jsonDatabase)
    })
}


router.post('/register', async (req, res) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    const username = req.body.name
    const password = hashedPassword

    const newUser = {
        id: uuid.v4(),
        name: username,
        password: password
    }

    // Cria um handle para o arquivo json de banco de dados
    getJsonDatabase((err, jsonDatabase) => {
        if (err) {
            return res.status(500).send('Erro ao ler o arquivo JSON de usuários.')
        }

        // Verifica se o username já está em uso
        const usernameExists = jsonDatabase.some(user => user.name === username)
        if (usernameExists) {
            return res.status(400).send('Este nome de usuário já está em uso.')
        }

        // Adiciona o novo usuário
        jsonDatabase.push(newUser)

        fs.writeFile('users.json', JSON.stringify(jsonDatabase), function (err) {
            if (err) {
                console.error(err)
                return res.status(500).send('Erro ao gravar no arquivo JSON de usuários.')
            }
            res.send('Usuário registrado com sucesso!')
        })
    })
})

router.post('/login', async (req, res) => {
    const username = req.body.name
    const password = req.body.password

    // Cria um handle para o arquivo json de banco de dados
    getJsonDatabase((err, jsonDatabase) => {
        if (err) {
            return res.status(500).send('Erro ao ler o arquivo JSON de usuários.')
        }

        // Busca o usuário pelo nome de usuário
        const user = jsonDatabase.find(user => user.name === username)
        if (!user) {
            return res.status(401).send('Nome de usuário ou senha incorretos.')
        }

        // Verifica a senha do usuário
        const validPassword = bcrypt.compareSync(password, user.password)
        if (!validPassword) {
            return res.status(401).send('Nome de usuário ou senha incorretos.')
        }

        // Gera um token JWT contendo o id do usuário
        const token = jwt.sign({
            _id: user.id
        }, 'minha_chave_secreta')

        res.cookie('jwt', token, {
            httpOnly: true,
            //secure: true,
            maxAge: 6 * 60 * 60 * 1000 // 6 horas
        })

        // Retorna o token JWT para o usuário
        res.send({
            //token: token
            message: 'success'
        })
    })
})

router.get('/dashboard', (req, res) => {
    const cookie = req.cookies['jwt']

    if (!cookie) {
        return res.status(401).send('Usuário não autenticado.')
    }

    const claims = jwt.verify(cookie, 'minha_chave_secreta')

    if (!claims) {
        return res.status(401).send('Usuário não autenticado.')
    }

    // Cria um handle para o arquivo json de banco de dados
    getJsonDatabase((err, jsonDatabase) => {
        if (err) {
            return res.status(500).send('Erro ao ler o arquivo JSON de usuários.')
        }

        // Busca o usuário pelo id
        const user = jsonDatabase.find(user => user.id === claims._id)
        if (!user) {
            return res.status(401).send('Usuário não encontrado.')
        }

        const {
            password,
            ...userData
        } = JSON.parse(JSON.stringify(user))

        // Retorna o usuário correspondente ao id
        res.send(userData)
    })
})

router.post('/logout', (req, res) => {
    res.cookie('jwt', '', {
        maxAge: 0
    })

    res.send({
        message: 'logout successful'
    })
})

module.exports = router;