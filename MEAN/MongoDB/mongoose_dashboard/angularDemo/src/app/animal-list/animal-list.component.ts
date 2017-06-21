import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'app/animal.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  animals: any = [];

  constructor(private _AnimalService:AnimalService) {
    console.log("just created animal list component")
    this._AnimalService.get()
    .then(res => console.log(this.animals = res)
    .catch(err => console.log(err))
   }

  ngOnInit() {
  }

}
