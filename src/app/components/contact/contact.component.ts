import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GOOGLE_MAPS_EMBED_URL } from '../../shared/models/constants';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly sanitizer = inject(DomSanitizer);

  mapsUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(GOOGLE_MAPS_EMBED_URL);
}
