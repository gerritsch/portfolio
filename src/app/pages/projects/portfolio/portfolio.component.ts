import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  faGithub = faGithub;
  images: any[];

  constructor() {
    this.images = [];
    this.images.push({
      source: 'assets/projects/portfolio/desktop.jpg',
      thumbnail: 'assets/projects/portfolio/desktop_thumbnail.jpg',
      title: 'Desktop'
    });
    this.images.push({
      source: 'assets/projects/portfolio/mobile.jpg',
      thumbnail: 'assets/projects/portfolio/mobile_thumbnail.jpg',
      title: 'Mobile'
    });
  }

  ngOnInit(): void {}
}
