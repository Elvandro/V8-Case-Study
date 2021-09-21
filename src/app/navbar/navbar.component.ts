import { Component, OnInit } from '@angular/core';
import { faBars, faWarehouse, faStore } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  status: boolean = false;
  faBars = faBars;
  faWarehouse = faWarehouse;
  faStore = faStore;

  constructor() { }

  ngOnInit(): void {
  }

  clickEvent(){
    this.status = !this.status;
  }


}
