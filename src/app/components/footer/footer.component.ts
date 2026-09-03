import { Component } from '@angular/core';
import { SOCIAL_LINKS, FOOTER_NAV_ITEMS, WHATSAPP_URL } from '../../shared/models/constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  socialLinks = SOCIAL_LINKS;
  navItems = FOOTER_NAV_ITEMS;
  whatsappUrl = WHATSAPP_URL;
}
