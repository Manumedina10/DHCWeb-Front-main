import { Component, OnInit } from '@angular/core';
import { Article, ArticleService } from '../../services/article.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.fetchRecentArticles();
  }

  fetchRecentArticles(): void {
    this.articleService.getRecentArticles().subscribe({
      next: (data) => {
        console.log('Fetched articles:', data);
        this.articles = data;
      },
      error: (err) => {
        console.error('Error fetching articles:', err);
      },
    });
  }
}
