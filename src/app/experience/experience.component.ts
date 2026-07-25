import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ExperienceEntry } from '../core/models/portfolio.models';
import { RevealOnScrollDirective } from '../shared/reveal-on-scroll.directive';

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealOnScrollDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  entries = input.required<ExperienceEntry[]>();
}
