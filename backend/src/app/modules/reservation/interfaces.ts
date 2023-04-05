export interface Reservation {
    name: string; 
    city:string;
    street: string;
    streetNumber: number;
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

export interface ReservationResponse {
  id: string;
  name: string;
  city:string;
  street: string;
  streetNumber: number;
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
  