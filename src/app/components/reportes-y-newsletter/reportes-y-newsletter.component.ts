import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

interface BotonAccion {
  texto: string;
  pdfPath: string;
}

interface ReporteEjemplo {
  id: number;
  titulo: string;
  descripcion: string;
  badge: string;
  /** Ruta al PDF. null = pendiente de incorporación o cuando usa botones específicos. */
  pdfPath?: string | null;
  /** Lista opcional de botones cuando la sección incluye más de un documento. */
  botones?: BotonAccion[];
  /** Texto informativo del QR. null = pendiente de materiales. */
  qrInfo: string | null;
}

@Component({
  selector: 'app-reportes-y-newsletter',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './reportes-y-newsletter.component.html',
  styleUrl: './reportes-y-newsletter.component.css'
})
export class ReportesYNewsletterComponent implements OnInit {
  /**
   * Ruta al archivo PowerPoint de presentación institucional.
   * Colocar el archivo en src/assets/documentos/ y asignar la ruta aquí.
   * Ejemplo: readonly pptxPath = 'assets/documentos/presentacion-dhc.pptx';
   */
  readonly pptxPath: string | null = 'assets/documentos/deuda-sistema-agrupado-y-preguntas.pptx';

  reportesEjemplo: ReporteEjemplo[] = [
    {
      id: 1,
      titulo: 'RADAR DHC — Newsletter',
      descripcion: 'Newsletter con las noticias más relevantes del sector salud: medicina, industria farmacéutica y mercado local.',
      badge: 'Noticias & Mercado',
      pdfPath: 'assets/documentos/radar-dhc-octubre-2026.pdf',
      qrInfo: null
    },
    {
      id: 2,
      titulo: 'Reportes Especiales — Sistema de Salud Argentino',
      descripcion: 'Evolución de afiliados, reporte financiero, deudas del sistema y lanzamientos en laboratorios.',
      badge: 'Sistema de Salud',
      pdfPath: 'assets/documentos/deudas-sistema-salud.pdf',
      qrInfo: null
    },
    {
      id: 3,
      titulo: 'Información Médica Relevante',
      descripcion: 'Resultados de Fase III, aprobaciones FDA-EMA, adquisiciones y nuevos desarrollos terapéuticos.',
      badge: 'Investigación',
      pdfPath: null,
      botones: [
        {
          texto: 'Aprobaciones FDA / EMA',
          pdfPath: 'assets/documentos/aprobaciones-fda-ema-octubre-2026.pdf'
        },
        {
          texto: 'Ensayos de Fase 3',
          pdfPath: 'assets/documentos/reporte-fase-iii-octubre-2026.pdf'
        }
      ],
      qrInfo: null
    },
    {
      id: 4,
      titulo: 'Análisis Financiero de Financiadores',
      descripcion: 'Análisis individual de financiadores del sistema de salud con métricas clave de desempeño.',
      badge: 'Finanzas',
      pdfPath: 'assets/documentos/analisis-individual-financiador.pdf',
      qrInfo: null
    }
  ];

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Reportes Especiales y Newsletter | DHC Health Analytics');
    this.metaService.updateTag({ name: 'robots', content: 'noindex, nofollow' });
  }
}
