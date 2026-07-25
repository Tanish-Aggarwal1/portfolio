import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FooterContent, Personal } from '../core/models/portfolio.models';
import { IconComponent } from '../shared/icon/icon.component';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  personal = input.required<Personal>();
  footer = input.required<FooterContent>();

  protected readonly year = new Date().getFullYear();
}
