import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Beer } from './beer-list/Beer';

/**
 * Maneja la logica del carrito
 * 
 */
@Injectable({
  providedIn: 'root'
})
export class BeerCartService {

  private _cartList: Beer[] = [];

  cartList: BehaviorSubject<Beer[]> = new BehaviorSubject([]);

  constructor() { }

  addToCart(beer: Beer) {
    let item: Beer = this._cartList.find((v1) => v1.name == beer.name);
    if(!item) {
      this._cartList.push({ ... beer});
    } else {
      item.quantity += beer.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList); // equivalente al emitt de eventos
  }

}
