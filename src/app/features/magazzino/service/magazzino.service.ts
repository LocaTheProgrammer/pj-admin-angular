import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { retreiveAllMagazzinos, updateMagazzino } from 'src/app/redux/magazzino/magazzino.actions';

@Injectable({
  providedIn: 'root'
})
export class MagazzinoService {

  constructor(private store:Store) { }

  retreiveAllMagazzinos(){
    this.store.dispatch(retreiveAllMagazzinos());
  }

  updateMagazzino(id:number, idArticolo:number, disponibilita:number, preorder:number){
    this.store.dispatch(updateMagazzino({id,idArticolo,disponibilita,preorder}))
  }
}
