import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { retrieveAllArticolos } from 'src/app/redux/articolo/product.actions';

@Injectable({
  providedIn: 'root'
})
export class ArticoliService {

  constructor(private store: Store) { }

  retrieveAllArticolos(){
    this.store.dispatch(retrieveAllArticolos())
  }
}
