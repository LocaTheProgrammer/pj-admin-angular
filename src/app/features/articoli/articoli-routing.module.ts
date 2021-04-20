import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreaArticoloComponent } from './crea/crea-articolo.component';

import { ArticoliComponent } from './main/articoli.component';
import { ModificaArticoliComponent } from './modifica/modifica-articoli.component';

const routes: Routes = [{ path: '', component: ArticoliComponent },
{ path: 'modifica', component: ModificaArticoliComponent },
{ path: 'crea', component: CreaArticoloComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticoliRoutingModule { }
