import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { CardComponent } from './card.component';
import { Project } from '../core/models/portfolio.models';

const mockProject: Project = {
  id: 1,
  title: 'Alpha Project',
  subtitle: 'First project',
  image: { '/images/missing.webp': 'Alpha screenshot' },
  link: 'https://example.com/alpha',
  description: 'Alpha description.',
  tags: ['HTML', ''],
  footer: 'Built with HTML.',
};

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    fixture.componentRef.setInput('project', mockProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title and skip empty tags', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Alpha Project');
    expect(compiled.querySelectorAll('.project-tags .badge').length).toBe(1);
  });

  it('should hide an image element when it fails to load', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img') as HTMLImageElement;
    img.dispatchEvent(new Event('error'));
    expect(img.style.display).toBe('none');
  });
});
