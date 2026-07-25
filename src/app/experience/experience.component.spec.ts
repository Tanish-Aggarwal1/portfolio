import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { ExperienceComponent } from './experience.component';
import { ExperienceEntry } from '../core/models/portfolio.models';

const mockEntries: ExperienceEntry[] = [
  {
    id: 1,
    role: 'Software Developer Intern',
    organization: 'Example Co.',
    startDate: 'May 2026',
    endDate: null,
    location: 'Remote',
    highlights: ['Shipped a feature.'],
  },
];

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceComponent);
    fixture.componentRef.setInput('entries', mockEntries);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render "Present" for an open-ended role', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.timeline-dates')?.textContent).toContain('Present');
  });
});
