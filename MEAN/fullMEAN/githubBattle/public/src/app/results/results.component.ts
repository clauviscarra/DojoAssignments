import { Component, OnInit } from '@angular/core';
import { BattleService } from '../battle.service'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  users:any =[];

  constructor(private _battleService:BattleService) { }

  ngOnInit() {
    this.users=this._battleService.battle()
  }



}
