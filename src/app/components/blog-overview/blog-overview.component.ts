import { Component, OnInit } from '@angular/core';
import { BlogArticle, BlogArticles } from 'src/app/constants/blog-metadata';

@Component({
  selector: 'app-blog-overview',
  templateUrl: './blog-overview.component.html',
  styleUrls: ['./blog-overview.component.scss'],
})
export class BlogOverviewComponent implements OnInit {
  showArticles: BlogArticle[] = [];

  constructor() {
    this.showArticles = this.getRandomElementsFromArray(
      BlogArticles,
      BlogArticles.length < 3 ? BlogArticles.length : 3
    );
  }

  ngOnInit(): void {}

  getRandomElementsFromArray(arr, n): BlogArticle[] {
    let result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len) {
      throw new RangeError('getRandom: more elements taken than available');
    }
    while (n--) {
      const x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }
}
