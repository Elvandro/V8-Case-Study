import { Observable } from "rxjs";

export interface Product {
  'name': string;
  'amount_of_inventory': number;
  'reorder_level': number;
  'amount_to_order': number;
}


export abstract class ProductData {
  abstract getProducts(): Observable<Product[]>;
}
