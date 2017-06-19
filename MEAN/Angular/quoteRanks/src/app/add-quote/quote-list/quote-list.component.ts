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


  voteUp(quote,i){
    quote.vote++;
  }
  voteDown(quote,i){
    quote.vote--;

  }



}
