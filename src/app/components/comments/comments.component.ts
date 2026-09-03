import { Component, AfterViewInit, ElementRef, inject } from '@angular/core';
import { COMMENTS_HREF } from '../../shared/models/constants';

@Component({
  selector: 'app-comments',
  standalone: true,
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent implements AfterViewInit {
  commentsHref = COMMENTS_HREF;
  private el = inject(ElementRef);

  ngAfterViewInit(): void {
    this.loadFacebookSDK();
  }

  private loadFacebookSDK(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const win = window as unknown as {
      FB?: { XFBML?: { parse?: (element: HTMLElement) => void } };
      fbAsyncInit?: () => void;
    };

    if (!win.FB) {
      win.fbAsyncInit = (): void => {
        if (win.FB?.XFBML?.parse) {
          win.FB.XFBML.parse(this.el.nativeElement);
        }
      };

      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      document.getElementById('fb-root')?.appendChild(script);
    } else if (win.FB?.XFBML?.parse) {
      win.FB.XFBML.parse(this.el.nativeElement);
    }
  }
}
