import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  color = ['DarkSeaGreen', 'Azure', 'AquaMarine', 'red' ,'MediumAquaMarine'];
  a:number =  (Math.floor(Math.random() * 4)) + 1;
  b:number =  (Math.floor(Math.random() * 4)) + 1;
  c:number =  (Math.floor(Math.random() * 4)) + 1;
  d:number =  (Math.floor(Math.random() * 4)) + 1;
  e:number =  (Math.floor(Math.random() * 4)) + 1;
  num:number=1;
  logNum(){
    console.log('num is:', this.num);
  };
  increaseNum(){
    this.num = this.num +1;
  }
}
