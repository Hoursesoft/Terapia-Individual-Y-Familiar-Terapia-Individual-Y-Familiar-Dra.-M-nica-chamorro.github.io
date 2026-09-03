import { Component } from '@angular/core';
import { WHATSAPP_URL } from '../../shared/models/constants';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  whatsappUrl = WHATSAPP_URL;
}
