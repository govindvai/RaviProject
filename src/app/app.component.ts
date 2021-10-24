import { Component } from '@angular/core';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Scanner Automation Settings';
  bb = true
  onclick(){
     this.bb= !this.bb;
  }

}
