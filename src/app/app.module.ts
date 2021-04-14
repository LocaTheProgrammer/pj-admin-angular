import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from './core/core.module';
import { reducers } from './redux';
import { EffectsModule } from '@ngrx/effects';
import { ArticolosEffects } from './redux/articolo/product.effects';
import { CarrellosEffects } from './redux/carrello/carrello.effects';
import { MagazzinoEffects } from './redux/magazzino/magazzino.effects';
import { SpedizioneEffects } from './redux/spedizione/spedizione.effects';
import { CarrelloTotalesEffects } from './redux/totale/totale.effects';
import { UtenteEffects } from './redux/utente/utente.effects';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    ReactiveFormsModule,
    SharedModule,

    StoreModule.forRoot(reducers),
     EffectsModule.forRoot([
      ArticolosEffects,
      UtenteEffects,
      CarrellosEffects,
      CarrelloTotalesEffects,
      SpedizioneEffects,
      MagazzinoEffects
     ]
     ),
    //  NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
