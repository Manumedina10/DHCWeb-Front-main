import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { Location } from '@angular/common';

@Component({
    selector: 'app-pharma',
    imports: [CommonModule, RouterModule],
    templateUrl: './pharma.component.html',
    styleUrl: './pharma.component.css',
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
export class PharmaComponent {
  constructor(private location: Location) {}
  volver() {
    this.location.back();
  }
  servicios = ['App'];

  formatearRuta(servicio: string): string {
    return servicio.toLowerCase().replace(/ /g, '-');
  }
}
