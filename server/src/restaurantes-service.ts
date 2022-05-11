import { Restaurante } from "./restaurante";
import { SingInData } from "./signInData";


export class RestaurantesService {
  restaurantes: Restaurante[] = [];

  titulo_campos: {[index:string]:string} = {"nome_restaurante": "Nome do Restaurante",
                                     "cnpj": "CNPJ",
                                     "cep": "CEP",
                                     "rua": "Rua",
                                     "numero": "Número",
                                     "cidade": "Cidade",
                                     "complemento": "Complemento",
                                     "horario_inicio": "Hora de Abrir",
                                     "horario_fim": "Hora de Fechar",
                                     "nome_responsavel": "Nome do Responsável",
                                     "telefone_responsavel": "Telefone do Responsável",
                                     "email": "E-mail para Contato",
                                     "senha": "Senha"}

  campos_req: string[] = ["nome_restaurante", "cnpj", "cep", "rua", "numero", "cidade", "complemento", "horario_inicio", "horario_fim", "nome_responsavel", "telefone_responsavel", "email", "senha"]
  
  add(restaurante: Restaurante): Restaurante {
    if (this.restaurantes.length >= 1000000) return null;
    for (var key of this.campos_req)
      if (!restaurante[key])
        throw Error(`O campo de ${this.titulo_campos[key]} não foi preenchido`);

    if(!restaurante.cnpj.match(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/))
      throw Error('O campo de CNPJ está mal formatado ou incompleto');

    if(!restaurante.cep.match(/^\d{5}\-\d{3}$/))
      throw Error('O campo de CEP está mal formatado ou incompleto');

    if(!restaurante.horario_inicio.match(/^\d{2}\:\d{2}$/))
      throw Error('O campo de Hora de Abrir está mal formatado ou incompleto');

    if(!restaurante.horario_fim.match(/^\d{2}\:\d{2}$/))
      throw Error('O campo de Hora de Fechar está mal formatado ou incompleto');

    if(!restaurante.telefone_responsavel.match(/^\(\d{2}\)\ \d{4,5}\-\d{4}$/))
      throw Error('O campo de Telefone do Responsável está mal formatado ou incompleto');

    if(!restaurante.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
      throw Error('O campo de E-mail para Contato está mal formatado ou incompleto');

    const newRestaurante = new Restaurante(<Restaurante> { ...restaurante });

    if(this.restaurantes.find(rest => rest.cnpj == newRestaurante.cnpj))
      throw Error('Um restaurante já foi cadastrado com esse CNPJ');
      
    this.restaurantes.push(newRestaurante);
    return newRestaurante;
  }

  update(restaurante: Restaurante) : Restaurante {
    console.log(this.restaurantes)
    var result : Restaurante = this.restaurantes.find(r => r.cnpj == restaurante.cnpj);
    if (result) result.update(restaurante);
    return result;
  }

  get() : Restaurante[] {
    return this.restaurantes;
  }
  
  getById(restCnpj: string) : Restaurante {
    return this.restaurantes.find(({ cnpj }) => cnpj == restCnpj);
  }

  authenticate(signInData:SingInData) : Restaurante{
    return this.restaurantes.find(({email, senha}) => 
      signInData.getEmail() === email && signInData.getPassword() === senha
    )
  }
  
  delete(restEmail: string) : Restaurante {
    const restaurante = this.restaurantes.find(({ email }) => email == restEmail);
    this.restaurantes.splice(this.restaurantes.indexOf(restaurante), 1);
    return restaurante;
  }
}
