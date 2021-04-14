import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MagazzinoRoutingModule } from './magazzino-routing.module';
import { MagazzinoComponent } from './main/magazzino.component';


@NgModule({
  declarations: [MagazzinoComponent],
  imports: [
    CommonModule,
    MagazzinoRoutingModule
  ]
})
export class MagazzinoModule { }
