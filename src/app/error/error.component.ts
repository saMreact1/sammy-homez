import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <div class="error">
    <h1>404: Page Not Found</h1>
    <p>The page you are looking for can not be found or you do not have access to it.</p>
    </div>
  `,
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

}
