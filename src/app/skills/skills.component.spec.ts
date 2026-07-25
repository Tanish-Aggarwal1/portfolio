import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { SkillsComponent } from './skills.component';
import { SkillGroup } from '../core/models/portfolio.models';

const mockGroups: SkillGroup[] = [
  { category: 'Languages', skills: [{ skill: 'TypeScript', details: 'Typed apps' }] },
  { category: 'Frameworks', skills: [{ skill: 'Angular', details: 'Signals & SSR' }] },
];

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    fixture.componentRef.setInput('skillGroups', mockGroups);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a card per skill group', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.skill-group').length).toBe(2);
  });
});
