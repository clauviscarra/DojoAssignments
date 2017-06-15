import { Component } from '@angular/core';
import { Power } from './power';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  power = new Power();
  powers = [];
  onSubmit(){
    console.log(this.power)
    this.powers = [];
    this.powers.push(this.power);
    this.power = new Power;
}
}
