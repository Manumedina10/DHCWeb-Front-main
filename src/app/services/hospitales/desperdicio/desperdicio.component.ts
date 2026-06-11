import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-desperdicio',
  imports: [CommonModule],
  templateUrl: './desperdicio.component.html',
})
export class DesperdicioComponent {
  constructor(private location: Location) {}

  volver() {
    this.location.back();
  }
}
