import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagazzinoComponent } from './main/magazzino.component';
import { ModificaMagazzinoComponent } from './modifica-magazzino/modifica-magazzino.component';

const routes: Routes = [{ path: '', component: MagazzinoComponent },
{ path: 'modifica-magazzino', component: ModificaMagazzinoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MagazzinoRoutingModule { }
