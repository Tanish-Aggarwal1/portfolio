import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { FooterComponent } from './footer.component';
import { FooterContent, Personal } from '../core/models/portfolio.models';

const mockPersonal: Personal = {
  first: 'Test',
  last: 'User',
  role: 'Software Developer',
  tagline: 'Building things.',
  resumeUrl: null,
  socials: [],
  contact: { city: 'Test City', mail: 'test@example.com' },
};

const mockFooter: FooterContent = {
  listHeading: 'Built with',
  technologies: [{ name: 'Angular 20', note: 'Standalone & signals' }],
};

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    fixture.componentRef.setInput('personal', mockPersonal);
    fixture.componentRef.setInput('footer', mockFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the copyright line with the current year', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.footer-copyright')?.textContent).toContain(String(new Date().getFullYear()));
  });
});
