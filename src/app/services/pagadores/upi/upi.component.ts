import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-upi',
  imports: [CommonModule],
  templateUrl: './upi.component.html',
})
export class UpiComponent {
  constructor(private location: Location) {}

  volver() {
    this.location.back();
  }
}
