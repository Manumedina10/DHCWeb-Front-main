import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { Location } from '@angular/common';

@Component({
    selector: 'app-pagadores',
    imports: [CommonModule, RouterModule],
    templateUrl: './pagadores.component.html',
    styleUrl: './pagadores.component.css',
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
export class PagadoresComponent {

  constructor(private location: Location) {}

  volver() {
    this.location.back();
  }
  servicios = [
    { nombre: 'Oportunidades', ruta: 'oportunidades' },
    { nombre: 'Unidades de práctica integrada', ruta: 'upi' }
  ];

  formatearRuta(servicio: string): string {
    return servicio.toLowerCase().replace(/ /g, '-');
  }
}
