import { Component, OnInit } from '@angular/core';
import { Power } from './power';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  power = new Power();
  powers = [];
  onSubmit(){
    this.powers.push(this.power);
    this.power = new Power;

}
}
