import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.password.trim() === '') {
      alert('Por favor, ingresa la contraseña.');
      return;
    }

    this.authService.loginAsAdmin(this.password).subscribe({
      next: () => {
        alert('Inicio de sesión exitoso');
        this.router.navigate(['/']); // Redirigir a la página principal después del inicio de sesión
      },
      error: () => {
        alert('Contraseña incorrecta. Por favor, inténtalo nuevamente.');
      },
    });
  }
}
