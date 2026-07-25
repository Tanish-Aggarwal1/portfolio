import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { Section } from '../core/models/portfolio.models';
import { IconComponent } from '../shared/icon/icon.component';
import { ThemeService } from '../core/theme.service';

@Component({
  selector: 'app-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  sections = input.required<Section[]>();

  protected readonly theme = inject(ThemeService);
  protected readonly menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
