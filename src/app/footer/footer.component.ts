import { Component, Input } from '@angular/core';
import { Personal } from '../classes';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  cdate = new Date();

  @Input() personal!:Personal;
  @Input() footer!:any;
  
}
