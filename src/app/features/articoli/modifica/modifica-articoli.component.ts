import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Articolo } from 'src/app/core/model/Articolo.interface';
import { selectArticolos } from 'src/app/redux/articolo';
import { ArticoliService } from '../service/articoli.service';

@Component({
  selector: 'app-modifica-articoli',
  templateUrl: './modifica-articoli.component.html',
  styleUrls: ['./modifica-articoli.component.scss']
})
export class ModificaArticoliComponent implements OnInit {

  updateArticoloForm: FormGroup
  constructor(private store: Store, private fb:FormBuilder, private route: ActivatedRoute,private router: Router,private articoloService: ArticoliService) {
    this.articoloService.retrieveAllArticolos();
   }
  id:string
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      
  });


  this.updateArticoloForm=this.fb.group({
    nome: ['', Validators.required],
    prezzo: ['', Validators.required],
    descrizione: ['', Validators.required],
    genere: ['', Validators.required]
  })
      
  }

  get articoli(): Observable<Articolo[]> {
    return this.store.pipe(select(selectArticolos));
   
  }

  updateArticolo(){
    console.log("nome ",this.updateArticoloForm.value.nome)
    console.log("prezzo ",this.updateArticoloForm.value.prezzo)
    console.log("descrizione ",this.updateArticoloForm.value.descrizione)
    console.log("genere ",this.updateArticoloForm.value.genere)
    this.articoloService.updateArticolo(this.id,this.updateArticoloForm.value.nome,this.updateArticoloForm.value.descrizione,this.updateArticoloForm.value.prezzo,this.updateArticoloForm.value.genere)
  }

}
