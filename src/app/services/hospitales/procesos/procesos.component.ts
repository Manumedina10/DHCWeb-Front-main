import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-procesos',
  imports: [CommonModule],
  templateUrl: './procesos.component.html',
})
export class ProcesosComponent {
  constructor(private location: Location) {}

  volver() {
    this.location.back();
  }
}
