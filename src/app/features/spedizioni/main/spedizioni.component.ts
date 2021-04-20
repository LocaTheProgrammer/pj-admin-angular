import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Spedizione } from 'src/app/core/model/Spedizione.interface';
import { selectSpediziones } from 'src/app/redux/spedizione';
import { SpedizioniService } from '../service/spedizioni.service';

@Component({
  selector: 'app-spedizioni',
  templateUrl: './spedizioni.component.html',
  styleUrls: ['./spedizioni.component.scss']
})
export class SpedizioniComponent implements OnInit {

  constructor(private spedioniService: SpedizioniService, private store:Store) {
    this.spedioniService.retrieveSpedizioni()
   }

  ngOnInit(): void {
  }

  get spedizioni():Observable<Spedizione[]>{
    return this.store.pipe(select(selectSpediziones));
  }

}
