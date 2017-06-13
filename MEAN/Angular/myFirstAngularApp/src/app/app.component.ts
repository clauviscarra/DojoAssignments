import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  emails  =  [{email:['bill@gates.com', 'ada@lovelace.com', 'john@carmac.com', 'gabe@newel.com']}, {importance:['High', 'High', 'Low', 'Low']}, {subject:['New Windows', 'Programming', 'Updated Algo', 'HL3!']}, {content:['windows XI', 'Enchantress of Numbers','New Algorithm shadow volumes','Just kidding']}
]
}
