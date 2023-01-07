export interface UserResponseDTO {
  id: string;
  name: string;
  cpf: string;
  email: string;
  password?: string;
}

export interface UserCreationDTO {
  name: string;
  email: string;
  cpf: string;
  password: string;
}
