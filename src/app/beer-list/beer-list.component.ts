import { Component, OnInit } from '@angular/core';
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
    },
    {
      name: 'Red Red Wine',
      type: 'Barley Wine',
      price: 200,
      stock: 3,
      image: 'assets/img/porter.jpeg',
      clearance: true,
    },
    {
      name: 'Yellow Submarine',
      type: 'Golden Ale',
      price: 180,
      stock: 0,
      image: 'assets/img/porter.jpeg',
      clearance: false,
    },
    {
      name: 'Yellow Submarine 2',
      type: 'Golden Ale',
      price: 200,
      stock: 0,
      image: 'assets/img/porter.jpeg',
      clearance: false,
    },
  ];

  constructor() { }


  ngOnInit(): void {
  }

}
