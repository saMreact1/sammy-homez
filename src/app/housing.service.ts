import { Injectable } from '@angular/core';
import { HousingLocation } from "./housing-location";

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  protected housingLocationList: HousingLocation[] = [
        {
            "id": 0,
            "name": "Acme Fresh Start Housing",
            "city": "Juneau",
            "state": "AK",
            "photo": "../../assets/images/housing-1.jpeg",
            "availableUnits": 0,
            "wifi": true,
            "laundry": true
        },
        {
            "id": 1,
            "name": "A113 Transitional Housing",
            "city": "Santa Monica",
            "state": "CA",
            "photo": "../../assets/images/housing-2.jpeg",
            "availableUnits": 1,
            "wifi": false,
            "laundry": false
        },
        {
            "id": 2,
            "name": "Homesteady Housing",
            "city": "Chicago",
            "state": "IL",
            "photo": "../../assets/images/housing-3.jpeg",
            "availableUnits": 1,
            "wifi": true,
            "laundry": false
        },
        {
            "id": 3,
            "name": "Happy Homes Group",
            "city": "Gary",
            "state": "IN",
            "photo": "../../assets/images/housing-4.jpeg",
            "availableUnits": 1,
            "wifi": true,
            "laundry": false
        },
        {
            "id": 4,
            "name": "Hopeful Apartment Group",
            "city": "Oakland",
            "state": "CA",
            "photo": "../../assets/images/housing-5.jpeg",
            "availableUnits": 2,
            "wifi": true,
            "laundry": true
        },
        {
            "id": 5,
            "name": "Seriously Safe Towns",
            "city": "Oakland",
            "state": "CA",
            "photo": "../../assets/images/housing-6.jpeg",
            "availableUnits": 5,
            "wifi": true,
            "laundry": true
        },
        {
            "id": 6,
            "name": "Hopeful Housing Solutions",
            "city": "Oakland",
            "state": "CA",
            "photo": "../../assets/images/housing-7.jpeg",
            "availableUnits": 1,
            "wifi": true,
            "laundry": true
        },
        {
            "id": 7,
            "name": "Seiously Safe Towns",
            "city": "Oakland",
            "state": "CA",
            "photo": "../../assets/images/housing-8.jpeg",
            "availableUnits": 10,
            "wifi": false,
            "laundry": false
        },
        {
            "id": 8,
            "name": "Capital Safe Towns",
            "city": "Portland",
            "state": "OR",
            "photo": "../../assets/images/housing-9.jpeg",
            "availableUnits": 6,
            "wifi": true,
            "laundry": true
        }
  ]

  constructor() { }

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: Number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
