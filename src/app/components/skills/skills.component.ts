import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronCircleUp, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  activeSlideIndex = 0;
  faChevronCircleLeft = faChevronCircleUp;
  faChevronCircleRight = faChevronCircleDown;
  projects: {
    name: string;
    description: string;
    usedTechnologies: string[];
    link: string;
  }[] = [];

  constructor(private router: Router) {
    this.projects.push({
      name: 'Personal Website',
      description: `One of my occasional frontend projects is this personal website which functions as a portfolio of my personal projects.
      The goal of this project was to build a simple minimalistic website with the new version 9 of Angular
      and to learn more about Netlify and their hosting capabilites for Angular Applications.`,
      usedTechnologies: ['TypeScript', 'Angular', 'SCSS', 'Netlify'],
      link: '/projects/portfolio'
    });
  }

  nextSlide() {
    if (this.activeSlideIndex + 1 >= this.projects.length) {
      this.activeSlideIndex = 0;
    } else {
      this.activeSlideIndex += 1;
    }
  }

  previousSlide() {
    if (this.activeSlideIndex - 1 < 0) {
      this.activeSlideIndex = this.projects.length - 1;
    } else {
      this.activeSlideIndex -= 1;
    }
  }

  ngOnInit(): void {}
}
