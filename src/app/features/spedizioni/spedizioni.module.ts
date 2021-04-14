import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpedizioniRoutingModule } from './spedizioni-routing.module';
import { SpedizioniComponent } from './main/spedizioni.component';


@NgModule({
  declarations: [SpedizioniComponent],
  imports: [
    CommonModule,
    SpedizioniRoutingModule
  ]
})
export class SpedizioniModule { }
