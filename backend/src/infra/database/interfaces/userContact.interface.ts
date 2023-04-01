import { UserCreationDTO } from './user.interface';

export interface ADMUserContactDTO {
  userId: string;
  phone: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  complement: string;
  reference: string;
}

export interface ADMUserCreationDTO extends UserCreationDTO {
  phone: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  complement: string;
  reference: string;
}
