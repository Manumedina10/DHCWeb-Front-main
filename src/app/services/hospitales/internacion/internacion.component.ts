import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-internacion',
  imports: [CommonModule],
  templateUrl: './internacion.component.html',
})
export class InternacionComponent {
  constructor(private location: Location) {}

  volver() {
    this.location.back();
  }
}
