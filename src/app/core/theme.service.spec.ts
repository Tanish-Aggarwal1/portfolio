import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { THEME_STORAGE_KEY, ThemeService } from './theme.service';

function mockSystemPreference(prefersLight: boolean): void {
  spyOn(window, 'matchMedia').and.returnValue({ matches: prefersLight } as MediaQueryList);
}

describe('ThemeService', () => {
  beforeEach(() => {
    localStorage.removeItem(THEME_STORAGE_KEY);
    TestBed.configureTestingModule({ providers: [provideZonelessChangeDetection()] });
  });

  afterEach(() => {
    localStorage.removeItem(THEME_STORAGE_KEY);
    document.documentElement.removeAttribute('data-theme');
  });

  it('falls back to the system preference when nothing is stored', () => {
    mockSystemPreference(true);
    expect(TestBed.inject(ThemeService).theme()).toBe('light');
  });

  it('falls back to dark when the system prefers dark and nothing is stored', () => {
    mockSystemPreference(false);
    expect(TestBed.inject(ThemeService).theme()).toBe('dark');
  });

  it('prefers a stored light theme over a system preference of dark', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'light');
    mockSystemPreference(false); // system says dark, storage should win
    expect(TestBed.inject(ThemeService).theme()).toBe('light');
  });

  it('prefers a stored dark theme over a system preference of light', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');
    mockSystemPreference(true); // system says light, storage should win
    expect(TestBed.inject(ThemeService).theme()).toBe('dark');
  });

  it('ignores a corrupted stored value and falls back to the system preference', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'blue');
    mockSystemPreference(true);
    expect(TestBed.inject(ThemeService).theme()).toBe('light');
  });

  it('toggle() flips between dark and light', () => {
    mockSystemPreference(false);
    const service = TestBed.inject(ThemeService);
    expect(service.theme()).toBe('dark');

    service.toggle();
    expect(service.theme()).toBe('light');

    service.toggle();
    expect(service.theme()).toBe('dark');
  });

  it('persists the theme to localStorage and the document element on change', () => {
    mockSystemPreference(false);
    const service = TestBed.inject(ThemeService);
    TestBed.tick();

    service.toggle();
    TestBed.tick();

    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });
});
