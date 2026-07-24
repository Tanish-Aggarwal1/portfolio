import { Component, Input } from '@angular/core';
import { Personal } from '../classes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() personal!:Personal;
  @Input() socials!:{name: string, link: string}[];
  
}
