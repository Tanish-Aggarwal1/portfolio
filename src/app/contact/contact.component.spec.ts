import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { ContactComponent } from './contact.component';
import { Personal } from '../core/models/portfolio.models';

const mockPersonal: Personal = {
  first: 'Test',
  last: 'User',
  role: 'Software Developer',
  tagline: 'Building things.',
  resumeUrl: null,
  socials: [{ name: 'GitHub', link: 'https://github.com/example' }],
  contact: { city: 'Test City', mail: 'test@example.com', phone: '+1 555-555-5555' },
};

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    fixture.componentRef.setInput('personal', mockPersonal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a mailto link and the socials list', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a[href^="mailto:"]')).toBeTruthy();
    expect(compiled.querySelectorAll('.social-link').length).toBe(1);
  });

  it('should not render the street address', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Test City');
  });
});
