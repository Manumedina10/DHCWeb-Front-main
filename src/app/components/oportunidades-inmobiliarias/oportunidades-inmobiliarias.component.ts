import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Title, Meta, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-oportunidades-inmobiliarias',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './oportunidades-inmobiliarias.component.html',
  styleUrl: './oportunidades-inmobiliarias.component.css'
})
export class OportunidadesInmobiliariasComponent implements OnInit {
  /**
   * Ruta al PDF de oportunidades inmobiliarias.
   */
  readonly pdfPath = 'assets/documentos/oportunidades-inmobiliarias.pdf';
  safePdfUrl: SafeResourceUrl | null = null;

  private titleService = inject(Title);
  private metaService = inject(Meta);
  private sanitizer = inject(DomSanitizer);

  ngOnInit(): void {
    this.titleService.setTitle('Oportunidades Inmobiliarias en Salud | DHC Health Analytics');
    this.metaService.updateTag({ name: 'robots', content: 'noindex, nofollow' });
    this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfPath);
  }
}

