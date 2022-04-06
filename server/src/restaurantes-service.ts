import { Restaurante } from "./restaurante";

export class RestaurantesService {
  restaurantes: Restaurante[] = [];
  
  add(restaurante: Restaurante): Restaurante {
    if (this.restaurantes.length >= 10) return null;
    for (var key in restaurante)
      if (!restaurante[key])
        throw Error(`O campo ${key} não foi preenchido`);
    const newRestaurante = new Restaurante(<Restaurante> { ...restaurante });
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
