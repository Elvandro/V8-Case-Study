import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { Product, ProductData } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends ProductData {


  private products = [
    {'name': 'Milk', 'amount_of_inventory': 100, 'reorder_level': 80, 'amount_to_order': 80},
    {'name': 'Bread', 'amount_of_inventory': 10, 'reorder_level': 8, 'amount_to_order': 15},
    {'name': 'Honey', 'amount_of_inventory': 20, 'reorder_level': 15, 'amount_to_order': 10},
    {'name': 'Cups', 'amount_of_inventory': 20, 'reorder_level': 10, 'amount_to_order': 50},
    {'name': 'Plates', 'amount_of_inventory': 20, 'reorder_level': 10, 'amount_to_order': 50},
  ];


  private orders:Array<Product> = [];

  getProducts(): Observable<any> {
    return observableOf(this.products);
  };

  createOrders(product: Product) {
    this.orders.push(product);
  };

  getOrders(): Observable<any> {
    return observableOf(this.orders);
  };

  dispatchOrders(product: Product): Observable<any> {
    product.amount_of_inventory += product.amount_to_order;
    return observableOf(this.products);
  };
}
