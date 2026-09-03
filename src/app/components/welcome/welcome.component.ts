import { Component } from '@angular/core';
import { WHATSAPP_URL } from '../../shared/models/constants';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  whatsappUrl = WHATSAPP_URL;
}
