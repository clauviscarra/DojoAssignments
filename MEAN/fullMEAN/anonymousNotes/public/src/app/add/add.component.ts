import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NotesService } from 'app/note-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  notes:any= [];



  constructor(private _NotesService:NotesService, private _router:Router) { _NotesService.get()
    .then(res => this.notes = res)
    .catch(err => console.log(err))
  }

  note = {};


  ngOnInit() {
  }

  createNote(){
    this._NotesService.create(this.note)
    .then(data => {this.notes = data;
    this.note={};})
    .catch(err=> console.log(err))
  }

}
