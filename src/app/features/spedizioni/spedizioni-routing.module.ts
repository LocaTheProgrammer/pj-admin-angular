import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpedizioniComponent } from './main/spedizioni.component';

const routes: Routes = [{ path: '', component: SpedizioniComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpedizioniRoutingModule { }
