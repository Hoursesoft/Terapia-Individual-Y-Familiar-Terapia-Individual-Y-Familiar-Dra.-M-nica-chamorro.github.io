import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { ContactComponent } from './components/contact/contact.component';
import { CommentsComponent } from './components/comments/comments.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    WelcomeComponent,
    AboutComponent,
    ServicesComponent,
    BenefitsComponent,
    ContactComponent,
    CommentsComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
// eslint-disable-next-line @angular-eslint/component-class-suffix -- Angular root component convention
export class App {
  title = 'Terapia Individual Y Familiar - Dra. Mónica Chamorro';
}
