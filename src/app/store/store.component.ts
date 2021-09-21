import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductsService } from '../mock/products.service';
import { takeUntil } from 'rxjs/operators';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../models/product';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();

  products: any;
  faCartPlus = faCartPlus;

  constructor(
    private productsService: ProductsService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts()
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      data => {
        this.products = data;
      }
    );
  }

  makeSale(prod: Product) {
    this.productsService.createOrders(prod)
    if (prod.amount_of_inventory <= prod.reorder_level) {
      this.toastrService.warning('Visit Warehouse to disptach items', 'You have Reached the Reorder Level');
    };
  }


  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
