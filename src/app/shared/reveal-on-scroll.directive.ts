import { AfterViewInit, DestroyRef, Directive, ElementRef, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RevealOnScrollService } from '../core/reveal-on-scroll.service';

@Directive({
  selector: '[appRevealOnScroll]',
  host: { class: 'reveal' },
})
export class RevealOnScrollDirective implements AfterViewInit {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);
  private readonly revealService = inject(RevealOnScrollService);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (typeof IntersectionObserver === 'undefined' || prefersReducedMotion) {
      this.el.nativeElement.classList.add('reveal-visible');
      return;
    }

    this.revealService.observe(this.el.nativeElement, () => {
      this.el.nativeElement.classList.add('reveal-visible');
    });
    this.destroyRef.onDestroy(() => this.revealService.unobserve(this.el.nativeElement));
  }
}
