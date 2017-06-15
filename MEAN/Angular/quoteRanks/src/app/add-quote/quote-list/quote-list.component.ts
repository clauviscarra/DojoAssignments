import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  @Input() myQuotes;


  constructor() { }

  ngOnInit() {
  }

  count: number = 0;
  counting : number = 0;
  voteUp(){
    this.counting = this.count ++;
  }
  voteDown(){
    this.counting = this.count --;

  }

  delete(){
    this.myQuotes.pop();
  }


}
