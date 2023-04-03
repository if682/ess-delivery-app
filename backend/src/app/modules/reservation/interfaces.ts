export interface Reservation {
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