import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
                        { path: '', redirectTo: '/home', pathMatch: 'full' }, 
                        { path: 'articoli', loadChildren: () => import('./features/articoli/articoli.module').then(m => m.ArticoliModule) }, 
                        { path: 'magazzino', loadChildren: () => import('./features/magazzino/magazzino.module').then(m => m.MagazzinoModule) },
                        { path: 'spedizioni', loadChildren: () => import('./features/spedizioni/spedizioni.module').then(m => m.SpedizioniModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
