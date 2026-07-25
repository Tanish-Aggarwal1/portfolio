import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { NavComponent } from './nav.component';
import { Section } from '../core/models/portfolio.models';

const mockSections: Section[] = [
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    fixture.componentRef.setInput('sections', mockSections);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a link per section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.nav-links a').length).toBe(2);
  });

  it('should toggle the mobile menu open state', () => {
    expect(component['menuOpen']()).toBeFalse();
    component.toggleMenu();
    expect(component['menuOpen']()).toBeTrue();
  });
});
