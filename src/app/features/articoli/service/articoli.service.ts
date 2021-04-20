import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { createArticolo, retrieveAllArticolos, updateArticolo } from 'src/app/redux/articolo/product.actions';

@Injectable({
  providedIn: 'root'
})
export class ArticoliService {

  constructor(private store: Store) { }

  retrieveAllArticolos(){
    this.store.dispatch(retrieveAllArticolos())
  }

  updateArticolo(id: string, nome:string, descrizione:string,prezzo:string,genere:string){
    this.store.dispatch(updateArticolo({id,nome,descrizione,prezzo,genere}));
  }

  createArticolo(nome:string, descrizione:string,prezzo:string,genere:string){
    this.store.dispatch(createArticolo({nome,descrizione,prezzo,genere}))
  }

  
}
