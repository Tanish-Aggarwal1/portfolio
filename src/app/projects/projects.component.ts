import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { Project } from '../core/models/portfolio.models';
import { CardComponent } from '../card/card.component';
import { IconComponent } from '../shared/icon/icon.component';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardComponent, IconComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = input.required<Project[]>();

  protected readonly query = signal('');

  protected readonly filteredProjects = computed(() => {
    const q = this.query().trim().toLowerCase();
    if (!q) {
      return this.projects();
    }
    return this.projects().filter((project) => project.title.toLowerCase().includes(q));
  });

  protected onSearchInput(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }
}
