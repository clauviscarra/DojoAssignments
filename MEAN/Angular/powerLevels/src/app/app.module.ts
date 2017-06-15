import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { Body1Component } from './body/body1/body1.component';
import { Body2Component } from './body/body2/body2.component';
import { HumanComponent } from './body/body1/human/human.component';
import { SaiyanComponent } from './body/body1/saiyan/saiyan.component';
import { SupersaiyanComponent } from './body/body1/supersaiyan/supersaiyan.component';
import { SupersaiyantwoComponent } from './body/body2/supersaiyantwo/supersaiyantwo.component';
import { SupersaiyanthreeComponent } from './body/body2/supersaiyanthree/supersaiyanthree.component';
import { SupersaiyanfourComponent } from './body/body2/supersaiyanfour/supersaiyanfour.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    Body1Component,
    Body2Component,
    HumanComponent,
    SaiyanComponent,
    SupersaiyanComponent,
    SupersaiyantwoComponent,
    SupersaiyanthreeComponent,
    SupersaiyanfourComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
