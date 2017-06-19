import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DcComponent } from './dc/dc.component';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { SeattleComponent } from './seattle/seattle.component';


const routes: Routes = [
  {  path: '', pathMatch: 'full', component: DcComponent },
  {  path: 'washington',  component: DcComponent },
  {  path: 'seattle',  component: SeattleComponent },
  {  path: 'bubank',  component: BurbankComponent },
  {  path: 'chicago',  component: ChicagoComponent },
  {  path: 'dallas',  component: DallasComponent },
  {  path: 'san-jose',  component: SanJoseComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
