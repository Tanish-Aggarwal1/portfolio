import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SkillGroup } from '../core/models/portfolio.models';
import { RevealOnScrollDirective } from '../shared/reveal-on-scroll.directive';

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealOnScrollDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skillGroups = input.required<SkillGroup[]>();
}
