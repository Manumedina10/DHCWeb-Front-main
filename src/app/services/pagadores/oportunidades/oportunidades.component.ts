import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-oportunidades',
  imports: [CommonModule],
  templateUrl: './oportunidades.component.html',
})
export class OportunidadesComponent {
  constructor(private location: Location) {}

  volver() {
    this.location.back();
  }
}
