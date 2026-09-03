import { Component } from '@angular/core';
import { BENEFITS } from '../../shared/models/constants';

@Component({
  selector: 'app-benefits',
  standalone: true,
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss',
})
export class BenefitsComponent {
  benefits = BENEFITS;
}
