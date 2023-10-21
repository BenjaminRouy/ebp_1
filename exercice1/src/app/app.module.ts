import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaisieArticlesComponent } from './saisie-articles/saisie-articles.component';
import { CalculRenduComponent } from './calcul-rendu/calcul-rendu.component';
import { SaisieSommeComponent } from './saisie-somme/saisie-somme.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SaisieArticlesComponent,
    CalculRenduComponent,
    SaisieSommeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
