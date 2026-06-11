import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-pharma-app',
  imports: [CommonModule],
  templateUrl: './pharma-app.component.html',
})
export class PharmaAppComponent {
  constructor(private location: Location) {}

  volver() {
    this.location.back();
  }
}
