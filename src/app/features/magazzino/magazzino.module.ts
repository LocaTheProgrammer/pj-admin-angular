import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MagazzinoRoutingModule } from './magazzino-routing.module';
import { MagazzinoComponent } from './main/magazzino.component';
import { ModificaMagazzinoComponent } from './modifica-magazzino/modifica-magazzino.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [MagazzinoComponent, ModificaMagazzinoComponent],
  imports: [
    CommonModule,
    MagazzinoRoutingModule,
    SharedModule
  ]
})
export class MagazzinoModule { }
