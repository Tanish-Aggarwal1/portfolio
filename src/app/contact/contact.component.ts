import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Personal } from '../core/models/portfolio.models';
import { IconComponent } from '../shared/icon/icon.component';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  personal = input.required<Personal>();
}
