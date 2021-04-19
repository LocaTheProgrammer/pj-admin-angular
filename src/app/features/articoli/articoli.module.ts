import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticoliRoutingModule } from './articoli-routing.module';
import { ArticoliComponent } from './main/articoli.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModificaArticoliComponent } from './modifica/modifica-articoli/modifica-articoli.component';


@NgModule({
  declarations: [ArticoliComponent, ModificaArticoliComponent],
  imports: [
    CommonModule,
    ArticoliRoutingModule,
    SharedModule
  ]
})
export class ArticoliModule { }
