import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'mail'
  | 'phone'
  | 'map-pin'
  | 'external-link'
  | 'sun'
  | 'moon'
  | 'menu'
  | 'close'
  | 'download'
  | 'arrow-up'
  | 'chevron-down'
  | 'search';

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      [attr.width]="size()"
      [attr.height]="size()"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.75"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      @switch (name()) {
        @case ('mail') {
          <path d="M3 5h18v14H3z" /><path d="m3 6 9 7 9-7" />
        }
        @case ('phone') {
          <path
            d="M4.5 3h3l1.5 5-2 1.5a11 11 0 0 0 6 6l1.5-2 5 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 2.5 5.2 2 2 0 0 1 4.5 3Z"
          />
        }
        @case ('map-pin') {
          <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" />
        }
        @case ('external-link') {
          <path d="M14 4h6v6" /><path d="M10 14 20 4" /><path
            d="M19 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6"
          />
        }
        @case ('sun') {
          <circle cx="12" cy="12" r="4" /><path
            d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
          />
        }
        @case ('moon') {
          <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
        }
        @case ('menu') {
          <path d="M3 6h18M3 12h18M3 18h18" />
        }
        @case ('close') {
          <path d="M6 6l12 12M18 6 6 18" />
        }
        @case ('download') {
          <path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" />
        }
        @case ('arrow-up') {
          <path d="M12 19V5" /><path d="m5 12 7-7 7 7" />
        }
        @case ('chevron-down') {
          <path d="m6 9 6 6 6-6" />
        }
        @case ('search') {
          <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
        }
      }
    </svg>
  `,
})
export class IconComponent {
  name = input.required<IconName>();
  size = input<number>(20);
}
