export interface UserResponse {
  id: string;
  name: string;
  email: string;
  cpf: string;
}


export interface FormValues {
  location: string;
  cep : string;
  checkIn: string;
  checkOut: string;
  guests: number;
  budget: number | '';
  additionalInfo: string;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  photos: Array<File>;
}