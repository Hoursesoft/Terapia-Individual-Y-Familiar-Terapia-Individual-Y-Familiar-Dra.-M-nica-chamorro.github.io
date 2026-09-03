import { Component, AfterViewInit, ElementRef, inject } from '@angular/core';
import { DISQUS_CONFIG } from '../../shared/models/disqus.config';

interface DisqusWindow {
  disqus_config?: () => void;
  DISQUS?: { reset: (args: object) => void };
}

@Component({
  selector: 'app-comments',
  standalone: true,
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent implements AfterViewInit {
  private readonly el = inject(ElementRef);

  ngAfterViewInit(): void {
    this.loadDisqus();
  }

  private loadDisqus(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const container = this.el.nativeElement.querySelector('#disqus_thread') as HTMLElement | null;
    if (!container) {
      return;
    }

    if (this.isDisqusLoaded()) {
      this.resetDisqus();
      return;
    }

    const win = window as unknown as DisqusWindow;
    win.disqus_config = (): void => undefined;

    const script = document.createElement('script');
    script.src = `https://${DISQUS_CONFIG.shortname}.disqus.com/embed.js`;
    script.setAttribute('data-timestamp', String(Date.now()));
    script.async = true;
    container.appendChild(script);
  }

  private resetDisqus(): void {
    const win = window as unknown as DisqusWindow;
    if (win.DISQUS) {
      win.DISQUS.reset({ reload: true, config: (): void => undefined });
    }
  }

  private isDisqusLoaded(): boolean {
    const existing = this.el.nativeElement.querySelector(
      `script[src*="${DISQUS_CONFIG.shortname}.disqus.com/embed.js"]`,
    );
    return existing != null;
  }
}
