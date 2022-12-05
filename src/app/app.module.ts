import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SmallCardComponent } from './small-card/small-card.component';
import { CardComponent } from './card/card.component';
import { CuriositesCardComponent } from './curiosites-card/curiosites-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SmallCardComponent,
    CardComponent,
    CuriositesCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
