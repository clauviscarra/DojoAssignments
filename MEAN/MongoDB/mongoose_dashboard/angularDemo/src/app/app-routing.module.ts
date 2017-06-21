import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalListComponent } from 'app/animal-list/animal-list.component';


const routes: Routes = [

  {
    path: '', pathMatch:'full', component: AnimalListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
