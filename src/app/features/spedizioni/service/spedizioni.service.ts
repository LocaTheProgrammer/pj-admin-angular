import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { retreiveAllSpediziones } from 'src/app/redux/spedizione/spedizione.actions';

@Injectable({
  providedIn: 'root'
})
export class SpedizioniService {

  constructor(private store:Store) { }

  retrieveSpedizioni(){
    this.store.dispatch(retreiveAllSpediziones())
  }
}
