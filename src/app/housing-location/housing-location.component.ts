import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  standalone: false,
  selector: 'app-housing-location',
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" alt="Photo of {{ housingLocation.name }}">
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">📍{{ housingLocation.city }}, {{ housingLocation.state }}</p>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
