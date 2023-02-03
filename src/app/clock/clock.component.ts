import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  // templateUrl: './clock.component.html',
  template: `<div class="timer"> {{myTimer()}} </div>`,
  // styleUrls: ['./clock.component.css']
  styles: [`
    .timer{
      margin-bottom: 10px;
      margin-right: 10px;
    }
  `]
})
export class ClockComponent {
  constructor(){}
  myTimer(): any {
    const date = new Date().toLocaleTimeString();
    return date
  }
  public time = setInterval(()=>{
    this.myTimer()}, 1000
  )
}
