import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagazzinoComponent } from './main/magazzino.component';

const routes: Routes = [{ path: '', component: MagazzinoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MagazzinoRoutingModule { }
