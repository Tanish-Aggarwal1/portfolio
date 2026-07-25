import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RevealOnScrollService {
  private observer: IntersectionObserver | null = null;
  private readonly callbacks = new Map<Element, () => void>();

  observe(el: Element, onReveal: () => void): void {
    this.callbacks.set(el, onReveal);
    this.getObserver().observe(el);
  }

  unobserve(el: Element): void {
    this.callbacks.delete(el);
    this.observer?.unobserve(el);
  }

  private getObserver(): IntersectionObserver {
    if (!this.observer) {
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.callbacks.get(entry.target)?.();
              this.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px 150px 0px' },
      );
    }
    return this.observer;
  }
}
