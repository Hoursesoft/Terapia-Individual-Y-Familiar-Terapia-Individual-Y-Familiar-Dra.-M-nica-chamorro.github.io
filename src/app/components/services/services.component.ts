import { Component, signal } from '@angular/core';
import { SERVICES } from '../../shared/models/constants';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  services = SERVICES;
  lightboxOpen = signal(false);
  lightboxImage = signal('');
  lightboxTitle = signal('');
  lightboxDescription = signal('');

  openGallery(image: string, title: string, description: string): void {
    this.lightboxImage.set(image);
    this.lightboxTitle.set(title);
    this.lightboxDescription.set(description);
    this.lightboxOpen.set(true);
  }

  closeGallery(): void {
    this.lightboxOpen.set(false);
  }
}
