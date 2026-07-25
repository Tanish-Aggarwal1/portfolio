import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { EducationComponent } from './education.component';
import { Certification, EducationEntry } from '../core/models/portfolio.models';

const mockEntries: EducationEntry[] = [
  {
    id: 1,
    program: 'Computer Systems Technology – SDNE',
    institution: 'Sheridan College',
    startDate: '2024',
    endDate: 'Apr 2027 (expected)',
    location: 'Oakville, ON',
  },
];

const mockCertifications: Certification[] = [{ id: 1, name: 'Test Cert', issuer: 'Test Issuer', date: '2026' }];

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(EducationComponent);
    fixture.componentRef.setInput('entries', mockEntries);
    fixture.componentRef.setInput('certifications', mockCertifications);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the education entry and certifications', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.education-card h3')?.textContent).toContain('SDNE');
    expect(compiled.querySelectorAll('.certifications-list .badge').length).toBe(1);
  });

  it('should hide the certifications heading when there are none', async () => {
    fixture.componentRef.setInput('certifications', []);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.certifications-heading')).toBeNull();
  });
});
