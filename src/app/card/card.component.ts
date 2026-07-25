import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { Project } from '../core/models/portfolio.models';
import { IconComponent } from '../shared/icon/icon.component';
import { RevealOnScrollDirective } from '../shared/reveal-on-scroll.directive';

@Component({
  selector: 'app-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KeyValuePipe, IconComponent, RevealOnScrollDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  project = input.required<Project>();

  protected onImageError(event: Event): void {
    (event.target as HTMLElement).style.display = 'none';
  }
}
