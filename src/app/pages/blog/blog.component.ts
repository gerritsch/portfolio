import { Component, OnInit } from '@angular/core';
import { BlogArticle, BlogArticles } from 'src/app/constants/blog-metadata';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  showArticles: BlogArticle[] = BlogArticles;

  constructor() {
    this.showArticles.sort((a, b) => {
      return a.date > b.date ? -1 : a.date < b.date ? 1 : 0;
    });
  }

  ngOnInit(): void {}
}
