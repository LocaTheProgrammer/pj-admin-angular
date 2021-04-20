import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Magazzino } from 'src/app/core/model/Magazzino.interface';
import { selectMagazzinos } from 'src/app/redux/magazzino';
import { ArticoliService } from '../../articoli/service/articoli.service';
import { MagazzinoService } from '../service/magazzino.service';

@Component({
  selector: 'app-modifica-magazzino',
  templateUrl: './modifica-magazzino.component.html',
  styleUrls: ['./modifica-magazzino.component.scss']
})
export class ModificaMagazzinoComponent implements OnInit {


  updateMagazzinoForm: FormGroup

  constructor(private store: Store, private fb:FormBuilder, private route: ActivatedRoute,private router: Router, private magazzinoService: MagazzinoService) { }

  id:number
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      
  });

  this.updateMagazzinoForm=this.fb.group({
  
    disponibilita: ['', Validators.required],
    preorder: ['', Validators.required]
  })

  }

  get magazzinos(): Observable<Magazzino[]> {
    return this.store.pipe(select(selectMagazzinos));
   
  }
  updateMagazzino(){
    this.magazzinoService.updateMagazzino(this.id, this.id, this.updateMagazzinoForm.value.disponibilita, this.updateMagazzinoForm.value.preorder);
  }
  
}
