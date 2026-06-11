import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { Location } from '@angular/common';

@Component({
    selector: 'app-hospitales',
    imports: [CommonModule, RouterModule],
    templateUrl: './hospitales.component.html',
    styleUrl: './hospitales.component.css',
    animations: [
        trigger('cardAnimation', [
            transition(':enter', [
                query('.card', [
                    style({ opacity: 0, transform: 'translateY(20px)' }),
                    stagger(100, [
                        animate('500ms ease-out', style({ opacity: 1, transform: 'none' }))
                    ])
                ], { optional: true })
            ])
        ])
    ]
})
export class HospitalesComponent {
  constructor(private location: Location) {}

  volver() {
    this.location.back();
  }

  servicios = [
    'Apertura',
    'Administración',
    'Estadística',
    'Internación',
    'Procesos',
    'Seguridad del paciente',
    'Desperdicio'
  ];

  formatearRuta(servicio: string): string {
    return servicio
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/ /g, '-');
  }
}

