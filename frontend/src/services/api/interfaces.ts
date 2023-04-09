export interface UserResponse {
  id: string;
  name: string;
  email: string;
  cpf: string;
}


export interface FormValues {
  name: string;
  city: string;
  street: string;
  streetNumber: number;
  cep: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  budget: number | '';
  additionalInfo: string;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  photos: Array<string>;
}

export interface BookingTryValues {
  userId: string | undefined;
  reservationId: string | undefined;
  paymentMethod: string | undefined;
  guestNumber: number;
  checkIn: string;
  checkOut: string;
}

export interface ReservationResponse {
  id: string;
  name: string;
  city: string;
  street: string;
  streetNumber: number;
  cep: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  budget: number | '';
  additionalInfo: string;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  photos: Array<string>;
}

export interface RatingResponse {
  id: string; userName: string; text: string; star: number; reservationId: string; userId: string; date: string;
}