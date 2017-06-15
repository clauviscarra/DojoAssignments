import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BodyComponent } from './body/body.component';
import { HumanComponent } from './body/human/human.component';
import { SaiyanComponent } from './body/saiyan/saiyan.component';
import { SuperSaiyanComponent } from './body/super-saiyan/super-saiyan.component';
import { SuperSaiyanTwoComponent } from './body/super-saiyan-two/super-saiyan-two.component';
import { SuperSaiyanThreeComponent } from './body/super-saiyan-three/super-saiyan-three.component';
import { SuperSaiyanFourComponent } from './body/super-saiyan-four/super-saiyan-four.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HumanComponent,
    SaiyanComponent,
    SuperSaiyanComponent,
    SuperSaiyanTwoComponent,
    SuperSaiyanThreeComponent,
    SuperSaiyanFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
