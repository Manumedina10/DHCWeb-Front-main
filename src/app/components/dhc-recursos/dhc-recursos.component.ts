import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

interface Recurso {
  id: number;
  titulo: string;
  descripcion: string;
  archivo: string;
  pdfPath: string;
  badge?: string;
  iconType: 'radar' | 'financiero' | 'clinicos' | 'fda' | 'deudas' | 'afiliados';
}

@Component({
  selector: 'app-dhc-recursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dhc-recursos.component.html',
  styleUrl: './dhc-recursos.component.css'
})
export class DhcRecursosComponent implements OnInit {
  recursos: Recurso[] = [
    {
      id: 1,
      titulo: 'RADAR DHC',
      descripcion: 'Newsletter con las noticias relevantes del sector de la salud.',
      archivo: 'radar-dhc-octubre-2026.pdf',
      pdfPath: 'assets/documentos/radar-dhc-octubre-2026.pdf',
      badge: 'Noticias & Mercado',
      iconType: 'radar'
    },
    {
      id: 2,
      titulo: 'Análisis financiero',
      descripcion: 'Análisis individual de un financiador del sistema de salud.',
      archivo: 'analisis-individual-financiador.pdf',
      pdfPath: 'assets/documentos/analisis-individual-financiador.pdf',
      badge: 'Finanzas',
      iconType: 'financiero'
    },
    {
      id: 3,
      titulo: 'Reporte de ensayos clínicos',
      descripcion: 'Reporte relevante de ensayos Fase III y desarrollos terapéuticos.',
      archivo: 'reporte-fase-iii-octubre-2026.pdf',
      pdfPath: 'assets/documentos/reporte-fase-iii-octubre-2026.pdf',
      badge: 'Investigación',
      iconType: 'clinicos'
    },
    {
      id: 4,
      titulo: 'Aprobaciones FDA / EMA',
      descripcion: 'Informe de nuevos fármacos y aprobaciones regulatorias.',
      archivo: 'aprobaciones-fda-ema-octubre-2026.pdf',
      pdfPath: 'assets/documentos/aprobaciones-fda-ema-octubre-2026.pdf',
      badge: 'Regulatorio',
      iconType: 'fda'
    },
    {
      id: 5,
      titulo: 'Deudas e incobrabilidad',
      descripcion: 'Información sobre deuda financiera y cheques sin fondos de agentes de salud.',
      archivo: 'deudas-sistema-salud.pdf',
      pdfPath: 'assets/documentos/deudas-sistema-salud.pdf',
      badge: 'Riesgo & Deuda',
      iconType: 'deudas'
    },
    {
      id: 6,
      titulo: 'Padrón de afiliados',
      descripcion: 'Evolución de afiliados de los principales agentes de salud con código RNAS.',
      archivo: 'evolucion-agentes-rnas-agosto-2026.pdf',
      pdfPath: 'assets/documentos/evolucion-agentes-rnas-agosto-2026.pdf',
      badge: 'RNAS & Padrones',
      iconType: 'afiliados'
    }
  ];

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    // Título de la página
    this.titleService.setTitle('DHC Health Analytics | Recursos');

    // Desindexación de buscadores
    this.metaService.updateTag({ name: 'robots', content: 'noindex, nofollow' });
  }
}
