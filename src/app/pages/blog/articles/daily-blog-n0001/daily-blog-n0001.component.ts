import { Component, OnInit } from '@angular/core';
import { BlogArticle, BlogArticles } from 'src/app/constants/blog-metadata';

@Component({
  selector: 'app-daily-blog-n0001',
  templateUrl: './daily-blog-n0001.component.html',
  styleUrls: ['./daily-blog-n0001.component.scss'],
})
export class DailyBlogN0001Component implements OnInit {
  articleId = 1;
  article: BlogArticle = BlogArticles.find((element) => {
    return element.id === this.articleId;
  });

  constructor() {}

  ngOnInit(): void {}
}
