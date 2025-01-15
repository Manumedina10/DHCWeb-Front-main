import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Article {
  id: number;
  title: string;
  content: string;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articles: Article[] = [
    {
      id: 1,
      title: 'Primer Artículo',
      content: 'Contenido del primer artículo.',
      date: new Date('2025-01-01').toISOString(), // Fecha fija
    },
    {
      id: 2,
      title: 'Segundo Artículo',
      content: 'Contenido del segundo artículo.',
      date: new Date('2025-01-05').toISOString(), // Fecha fija
    },
    {
      id: 3,
      title: 'Tercer Artículo',
      content: 'Contenido del tercer artículo.',
      date: new Date('2025-01-10').toISOString(), // Fecha fija
    },
  ];

  constructor() {}

  // Simula un GET para obtener los artículos recientes
  getRecentArticles(): Observable<Article[]> {
    return of(this.articles);
  }

  addArticle(title: string, content: string): void {
    const newArticle: Article = {
      id: this.articles.length + 1, // Genera un ID basado en la longitud actual
      title,
      content,
      date: new Date().toISOString(), // Fecha actual
    };
    this.articles.unshift(newArticle); // Agrega el nuevo artículo al inicio del array
  }
}
