import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { AboutComponent } from './about.component';
import { AboutContent } from '../core/models/portfolio.models';

const mockAbout: AboutContent = {
  myImg: '/images/missing.webp',
  aboutMe: 'Test about copy.',
  aboutMeLine2: 'More test copy.',
  careerGoal: 'Test career goal.',
  interests: ['Testing'],
};

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    fixture.componentRef.setInput('about', mockAbout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fall back to an initials placeholder when the image fails to load', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img') as HTMLImageElement;
    img.dispatchEvent(new Event('error'));
    fixture.detectChanges();
    expect(compiled.querySelector('.avatar-placeholder')).toBeTruthy();
  });
});
