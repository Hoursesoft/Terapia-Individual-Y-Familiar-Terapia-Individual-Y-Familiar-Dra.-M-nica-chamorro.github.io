import { Component } from '@angular/core';
import { GOOGLE_MAPS_EMBED_URL } from '../../shared/models/constants';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  mapsUrl = GOOGLE_MAPS_EMBED_URL;
}
