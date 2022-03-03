Feature: “remoção de cliente”
As a cliente cadastrado
I want to poder remover minha conta
So that terei meus dados removidos do sistema

Cenário 1: remoção realizada com sucesso
Given eu estou logada no usuário existente cadastrado com email "vlsc@cin.ufpe.br" e senha "exemplo123"
And estou na página de usuário
When eu tento remover minha conta
And coloco minha senha para confirmação da remoção
And confirmo
Then eu vou para a página inicial do aplicativo
And estou deslogada

Cenário 2: remoção cancelada
Given eu estou logada no usuário existente cadastrado com email "vlsc@cin.ufpe.br" e senha "exemplo123"
And estou na página de usuário
When eu tento remover minha conta
And coloco minha senha para confirmação da remoção
And cancelo
Then eu continuo na página de usuário
And estou logada em minha conta

Cenário 3: tentativa de remoção de cliente que errou a senha de confirmação
Given eu estou logada no usuário existente cadastrado com email "vlsc@cin.ufpe.br" e senha "exemplo123"
And estou na página de usuário
When eu tento remover minha conta
And coloco minha senha incorretamente para confirmação da remoção
And confirmo
Then eu vejo uma notificação de erro
And continuo logada na minha conta

Cenário 4: tentativa de remoção de cliente com pedido em andamento
Given eu estou logada no usuário existente cadastrado com email "vlsc@cin.ufpe.br" e senha "exemplo123"
And estou na página de usuário
And possuo um pedido em andamento
When eu tento remover minha conta
And coloco minha senha para confirmação da remoção
And confirmo
Then eu vejo uma notificação de erro
And continuo logada na minha conta

Cenário 5: tentativa de remoção de cliente que não colocou senha
Given eu estou logada no usuário existente cadastrado com email "vlsc@cin.ufpe.br" e senha "exemplo123"
And estou na página de usuário
When eu tento remover minha conta
And não coloco minha senha para confirmação da remoção
And confirmo
Then eu vejo uma notificação de erro
And continuo logada na minha conta

Cenário 6: tentativa de remoção de cliente que prencheu os dados mas cancelou a operação
Given eu estou logada no usuário existente cadastrado com email "vlsc@cin.ufpe.br" e senha "exemplo123"
And estou na página de usuário
When eu tento remover minha conta
And coloco minha senha para confirmação da remoção
And cancelo
Then eu vejo uma notificação perguntando se realmente desejo cancelar a operação
And confirmo a notificação
And continuo logada na minha conta