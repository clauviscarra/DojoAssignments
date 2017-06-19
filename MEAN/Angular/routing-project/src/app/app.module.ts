import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpService } from './http.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DcComponent } from './dc/dc.component';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { SeattleComponent } from './seattle/seattle.component';






@NgModule({
  declarations: [
    AppComponent,
    DcComponent,
    BurbankComponent,
    ChicagoComponent,
    DallasComponent,
    SanJoseComponent,
    SeattleComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
