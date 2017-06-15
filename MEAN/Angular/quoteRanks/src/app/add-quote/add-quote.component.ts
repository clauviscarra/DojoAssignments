import { Component, OnInit } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent {

  quote = new Quote();
  quotes = [];
  onSubmit(){
    this.quotes.push(this.quote)
  }

}
