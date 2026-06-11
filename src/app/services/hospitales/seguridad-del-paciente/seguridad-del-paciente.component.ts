import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-seguridad-del-paciente',
  imports: [CommonModule],
  templateUrl: './seguridad-del-paciente.component.html',
})
export class SeguridadDelPacienteComponent {
  constructor(private location: Location) {}

  volver() {
    this.location.back();
  }
}
