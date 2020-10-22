import { Component, OnInit } from '@angular/core';
import { BeerCartService } from '../beer-cart.service';
import { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beers: Beer[] = [
    {
      name: 'Bitter Call Saul',
      type: 'IPA',
      price: 180,
      stock: 5,
      image: 'assets/img/porter.jpeg',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Red Red Wine',
      type: 'Barley Wine',
      price: 200,
      stock: 3,
      image: 'assets/img/porter.jpeg',
      clearance: true,
      quantity: 0,
    },
    {
      name: 'Yellow Submarine',
      type: 'Golden Ale',
      price: 180,
      stock: 0,
      image: 'assets/img/porter.jpeg',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Yellow Submarine 2',
      type: 'Golden Ale',
      price: 200,
      stock: 0,
      image: 'assets/img/porter.jpeg',
      clearance: false,
      quantity: 0,
    },
  ];

  constructor(private cart: BeerCartService) { 
  }

  ngOnInit(): void {
  }

  addToCart(beer): void {
    this.cart.addToCart(beer);
    beer.stock -= beer.quantity;
    beer.quantity = 0;
  }

  maxReached(m: string) {
    alert(m);
  }
}
