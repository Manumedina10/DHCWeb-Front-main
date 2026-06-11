import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
    selector: 'app-apertura',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './apertura.component.html'
})
export class AperturaComponent {
  constructor(private location: Location) {}

  volver() {
    this.location.back();
  }
}
