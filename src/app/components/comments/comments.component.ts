import { Component, AfterViewInit, ElementRef, inject } from '@angular/core';
import { GISCUS_CONFIG } from '../../shared/models/giscus.config';

@Component({
  selector: 'app-comments',
  standalone: true,
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent implements AfterViewInit {
  private readonly el = inject(ElementRef);

  ngAfterViewInit(): void {
    this.loadGiscus();
  }

  private loadGiscus(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const container = this.el.nativeElement.querySelector('#giscus') as HTMLElement | null;
    if (!container || this.isGiscusLoaded()) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('data-repo', GISCUS_CONFIG.repo);
    script.setAttribute('data-repo-id', GISCUS_CONFIG.repoId);
    script.setAttribute('data-category', GISCUS_CONFIG.category);
    script.setAttribute('data-category-id', GISCUS_CONFIG.categoryId);
    script.setAttribute('data-mapping', GISCUS_CONFIG.mapping);
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', GISCUS_CONFIG.theme);
    script.setAttribute('data-lang', GISCUS_CONFIG.lang);
    script.setAttribute('data-loading', 'lazy');

    container.appendChild(script);
  }

  private isGiscusLoaded(): boolean {
    const existing = this.el.nativeElement.querySelector(
      'script[src="https://giscus.app/client.js"]',
    );
    return existing != null;
  }
}
