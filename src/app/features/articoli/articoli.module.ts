import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticoliRoutingModule } from './articoli-routing.module';
import { ArticoliComponent } from './main/articoli.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModificaArticoliComponent } from './modifica/modifica-articoli.component';
import { CreaArticoloComponent } from './crea/crea-articolo.component';


@NgModule({
  declarations: [ArticoliComponent, ModificaArticoliComponent, CreaArticoloComponent],
  imports: [
    CommonModule,
    ArticoliRoutingModule,
    SharedModule
  ]
})
export class ArticoliModule { }
