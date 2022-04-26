import { Restaurante } from "./restaurante";

export class RestaurantesService {
  restaurantes: Restaurante[] = [];
  
  add(restaurante: Restaurante): Restaurante {
    if (this.restaurantes.length >= 10) return null;
    for (var key in restaurante)
      if (!restaurante[key])
        throw Error(`O campo de ${key} não foi preenchido`);

    if(!restaurante.cnpj.match(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/))
      throw Error('O campo de cnpj está mal formatado ou incompleto');

    if(!restaurante.cep.match(/^\d{5}\-\d{3}$/))
      throw Error('O campo de cep está mal formatado ou incompleto');

    if(!restaurante.horario_inicio.match(/^\d{2}\:\d{2}$/))
      throw Error('O campo de horario inicial está mal formatado ou incompleto');

    if(!restaurante.horario_fim.match(/^\d{2}\:\d{2}$/))
      throw Error('O campo de horario final está mal formatado ou incompleto');

    if(!restaurante.telefone_responsavel.match(/^\(\d{2}\)\ \d{4,5}\-\d{4}$/))
      throw Error('O campo de telefone está mal formatado ou incompleto');

    if(!restaurante.email.match(/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/))
      throw Error('O campo de e-mail está mal formatado ou incompleto');

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
}
