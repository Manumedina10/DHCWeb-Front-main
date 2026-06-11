import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
    selector: 'app-administracion',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './administracion.component.html'
})
export class AdministracionComponent {
  constructor(private location: Location) {}

  volver() {
    this.location.back();
  }
}
