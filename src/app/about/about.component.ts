import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})



export class AboutComponent {
  @Input() aboutMe:any;
  // from splash.io
  date1 = new Date();
  date2 = new Date("03-03-2005");
  time = this.date1.getTime() - this.date2.getTime();
  age = Math.floor(this.time / 31557600000);

}

