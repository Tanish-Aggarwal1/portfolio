import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  @Input() socials!:{name: string, link: string}[];
  @Input() contact!:any;



}
