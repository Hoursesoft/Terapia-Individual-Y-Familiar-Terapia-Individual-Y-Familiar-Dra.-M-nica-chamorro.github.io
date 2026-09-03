import { Component, signal } from '@angular/core';
import { NAV_ITEMS } from '../../shared/models/constants';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navItems = NAV_ITEMS;
  menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
}
