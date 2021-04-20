import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Magazzino } from 'src/app/core/model/Magazzino.interface';
import { selectMagazzinos } from 'src/app/redux/magazzino';
import { MagazzinoService } from '../service/magazzino.service';

@Component({
  selector: 'app-magazzino',
  templateUrl: './magazzino.component.html',
  styleUrls: ['./magazzino.component.scss']
})
export class MagazzinoComponent implements OnInit {

  constructor(private magazzinoService: MagazzinoService, private store:Store,private router: Router) {
  this.magazzinoService.retreiveAllMagazzinos();
   }

  ngOnInit(): void {
  }

  get magazzino(): Observable<Magazzino[]> {
    return this.store.pipe(select(selectMagazzinos));
   
  }

  redirect:string
  modifica(id: number){
    console.log(id)
    this.redirect="magazzino/modifica-magazzino?id="+id;
    this.router.navigateByUrl(this.redirect)
  }

}
