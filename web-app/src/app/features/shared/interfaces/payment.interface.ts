export enum types {
  'CREDIT_CARD' = 'Cartão de Crédito',
  'DEBIT_CARD' = 'Cartão de Débito',
  'CASH' = 'Dinheiro',
  'PIX' = 'Pix',
}

export interface Payment {
  type: string;
  value: string;
  status: string;
}
