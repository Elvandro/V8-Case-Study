import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductsService } from '../mock/products.service';
import { takeUntil } from 'rxjs/operators';
import { faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../models/product';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();

  orders: any;
  faShippingFast = faShippingFast;

  constructor(
    private productsService: ProductsService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.productsService.getOrders()
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      data => {
        this.orders = data;
      }
    );
  }

  clickEvent(prod: Product) {
    this.productsService.dispatchOrders(prod);
    this.toastrService.success('Visit the store', 'You have successfully dispatched the items ');
  }


  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
