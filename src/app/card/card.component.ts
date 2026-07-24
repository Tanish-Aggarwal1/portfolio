import { Component, Input } from '@angular/core';
import { Projects } from '../classes';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() projectData!:Projects;

}
