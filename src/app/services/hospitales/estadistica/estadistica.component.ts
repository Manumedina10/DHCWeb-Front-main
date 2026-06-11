import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-estadistica',
  imports: [CommonModule],
  templateUrl: './estadistica.component.html',
})
export class EstadisticaComponent {
  constructor(private location: Location) {}

  volver() {
    this.location.back();
  }
}
