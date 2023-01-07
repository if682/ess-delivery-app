export interface UserResponseDTO {
  id: string;
  name: string;
  email: string;
}

export interface UserCreationDTO {
  name: string;
  email: string;
  password: string;
}
