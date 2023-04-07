export interface ReservationCreationDTO {
  name: string;
  city: string;
  street: string;
  streetNumber: number;
  cep: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  budget: number;
  additionalInfo: string;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  photos: Array<File>;
  owner: string;
}

export interface MakeReservationDTO {
  userId: string;
  reservationId: string;
}

export interface AcceptReservationDTO {
  id: number;
  accepted: boolean;
}
