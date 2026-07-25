import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { Project } from '../core/models/portfolio.models';

const mockProjects: Project[] = [
  {
    id: 1,
    title: 'Alpha Project',
    subtitle: 'First project',
    image: {},
    link: 'https://example.com/alpha',
    description: 'Alpha description.',
    tags: ['HTML'],
    footer: '',
  },
  {
    id: 2,
    title: 'Beta Project',
    subtitle: 'Second project',
    image: {},
    link: '',
    description: 'Beta description.',
    tags: ['CSS'],
    footer: '',
  },
];

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    fixture.componentRef.setInput('projects', mockProjects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render every project card by default', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-card').length).toBe(2);
  });

  it('should filter projects by title', () => {
    component['query'].set('alpha');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-card').length).toBe(1);
  });

  it('should show a no-results message when nothing matches', () => {
    component['query'].set('nonexistent');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.no-results')).toBeTruthy();
  });
});
