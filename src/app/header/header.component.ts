import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Personal } from '../core/models/portfolio.models';
import { IconComponent } from '../shared/icon/icon.component';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  personal = input.required<Personal>();
}
