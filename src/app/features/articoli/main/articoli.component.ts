import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Articolo } from 'src/app/core/model/Articolo.interface';
import { selectArticolos } from 'src/app/redux/articolo';
import { HomeService } from '../../home/service/home.service';
import { ArticoliService } from '../service/articoli.service';

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.scss']
})
export class ArticoliComponent implements OnInit {

  constructor(private store: Store, private articoloService: ArticoliService,private router: Router) {
    this.articoloService.retrieveAllArticolos();
   
   }

  ngOnInit(): void {
  }

  get articoli(): Observable<Articolo[]> {
    return this.store.pipe(select(selectArticolos));
   
  }

  redirect:string
  modifica(id: number){
    console.log(id)
    this.redirect="articoli/modifica?id="+id;
    this.router.navigateByUrl(this.redirect)
  }

  elimina(id:string){
    this.articoloService.eliminaArticolo(id);
  }
}
