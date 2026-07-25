import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { AboutContent } from '../core/models/portfolio.models';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  about = input.required<AboutContent>();

  protected readonly imageFailed = signal(false);
}
