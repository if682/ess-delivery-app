export interface Product {
  id: number;
  product: string;
  status: 'Active' | 'Inactive';
  start_date: string | Date;
  end_date: string | Date;
}
