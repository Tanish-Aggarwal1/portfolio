import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { HeaderComponent } from './header.component';
import { Personal } from '../core/models/portfolio.models';

const mockPersonal: Personal = {
  first: 'Test',
  last: 'User',
  role: 'Software Developer',
  tagline: 'Building things.',
  resumeUrl: null,
  socials: [],
  contact: { city: 'Test City', mail: 'test@example.com' },
};

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    fixture.componentRef.setInput('personal', mockPersonal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the name and role', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.hero-name')?.textContent).toContain('Test User');
    expect(compiled.querySelector('.hero-role')?.textContent).toContain('Software Developer');
  });

  it('should not render a resume link when resumeUrl is null', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a[download]')).toBeNull();
  });
});
