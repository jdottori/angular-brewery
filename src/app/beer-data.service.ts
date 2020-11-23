import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Beer } from './beer-list/Beer';

const URL = 'https://5f87805549ccbb00161775ca.mockapi.io/api/v1/beers';

@Injectable({
  providedIn: 'root'
})
export class BeerDataService {

  constructor(private http: HttpClient) { }

  /**
   * Consume la API de cervezas y devuelve un observable a la respuesta.
   */
  public getAll(): Observable<Beer[]> {
    // fetch('url', {method: 'GET'})

    return this.http.get<Beer[]>(URL)
              .pipe(
                tap((beers: Beer[]) => beers.forEach(beer => beer.quantity = 0))
              );
  }
}
