import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Articolo } from 'src/app/core/model/Articolo.interface';
import { selectArticolos } from 'src/app/redux/articolo';
import { ArticoliService } from '../service/articoli.service';

@Component({
  selector: 'app-crea-articolo',
  templateUrl: './crea-articolo.component.html',
  styleUrls: ['./crea-articolo.component.scss']
})
export class CreaArticoloComponent implements OnInit {

  createrticoloForm: FormGroup
  constructor(private store: Store, private fb:FormBuilder,private articoloService: ArticoliService) {
    
   }
 
  ngOnInit(): void {
  


  this.createrticoloForm=this.fb.group({
    nome: ['', Validators.required],
    prezzo: ['', Validators.required],
    descrizione: ['', Validators.required],
    genere: ['', Validators.required]
  })
      
  }

  get articoli(): Observable<Articolo[]> {
    return this.store.pipe(select(selectArticolos));
   
  }

  creaArticolo(){
    console.log("nome ",this.createrticoloForm.value.nome)
    console.log("prezzo ",this.createrticoloForm.value.prezzo)
    console.log("descrizione ",this.createrticoloForm.value.descrizione)
    console.log("genere ",this.createrticoloForm.value.genere)
    this.articoloService.createArticolo(this.createrticoloForm.value.nome,this.createrticoloForm.value.descrizione,this.createrticoloForm.value.prezzo,this.createrticoloForm.value.genere)
  }

}
