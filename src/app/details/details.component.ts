import { Component, inject } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  standalone: false,
  selector: 'app-details',
  template: `
    <article>
      <img [src]="housingLocation?.photo" class="listing-photo" alt="">
      <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class="listing-location">📍{{housingLocation?.city}}, {{housingLocation?.state}}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{housingLocation?.availableUnits}}</li>
          <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
          <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Apply now to live here</h2>
        <button type="button" class="primary" (click)="showModal = true">Apply now</button>
        <app-form-modal [isVisible]="showModal" (closeEvent)="showModal = false">
          <form [formGroup]="applyForm" (submit)="submitApplication()">
            <label for="first-name">First Name</label>
            <input type="text" id="first-name" formControlName="firstName">

            <label for="last-name">Last Name</label>
            <input type="text" id="last-name" formControlName="lastName">

            <label for="email">Email</label>
            <input type="text" id="email" formControlName="email">
            <!-- <button type="submit" class="primary">Apply now</button> -->
          </form>
        </app-form-modal>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  showModal = false;
  
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  })

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation
    });
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
