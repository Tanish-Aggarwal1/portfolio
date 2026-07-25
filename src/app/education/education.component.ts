import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Certification, EducationEntry } from '../core/models/portfolio.models';
import { RevealOnScrollDirective } from '../shared/reveal-on-scroll.directive';

@Component({
  selector: 'app-education',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealOnScrollDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  entries = input.required<EducationEntry[]>();
  certifications = input<Certification[]>([]);
}
