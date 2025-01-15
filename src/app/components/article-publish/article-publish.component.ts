import { Component } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-publish',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './article-publish.component.html',
  styleUrl: './article-publish.component.css'
})
export class ArticlePublishComponent {
  title: string = '';
  content: string = '';

  constructor(private articleService: ArticleService, private router: Router) {}

  publishArticle(): void {
    if (this.title && this.content) {
      this.articleService.addArticle(this.title, this.content);
      alert('Artículo publicado con éxito');
      this.router.navigate(['/']); // Redirige a la página principal después de publicar
    } else {
      alert('Por favor, completa todos los campos');
    }
  }
}
