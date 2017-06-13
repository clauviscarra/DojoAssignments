import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  today = new Date();
  color = 'yellow';
  timearr = [];
  showPST(){
    this.timearr = ['This is PST time:'];
    this.timearr.push(this.today);
  };
  showMST(){
    this.timearr = ['This is MST time:'];
    this.timearr.push(this.today);
  };
  showCST(){
    this.timearr = ['This is CST time:'];
    this.timearr.push(this.today);
  };
  showEST(){
    this.timearr = ['This is EST time:'];
    this.timearr.push(this.today);
  };
  clear(){
    this.timearr = []
  }
}
