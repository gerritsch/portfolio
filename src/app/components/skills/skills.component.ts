import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  projects: {
    name: string;
    description: string;
    usedTechnologies: string[];
    link: string;
  }[] = [];

  constructor() {
    this.projects.push({
      name: 'OAuth2 Authentication Server & Dashboard',
      description:
        'A simple OAuth2 Authentication Server which provides the Authorization Code Grant with/out PKCE Extension and Resource Owner Password Credentials Grant. The Dashboard features the registration of developer accout which can create new client credentials to add the OAuth2 Authentication Server to their applications.',
      usedTechnologies: ['NestJS', 'NodeJS', 'TypeScript', 'Angular', 'SCSS'],
      link: '#'
    });

    this.projects.push({
      name: 'OAuth2 Authentication Server & Dashboard',
      description:
        'A simple OAuth2 Authentication Server which provides the Authorization Code Grant with/out PKCE Extension and Resource Owner Password Credentials Grant. The Dashboard features the registration of developer accout which can create new client credentials to add the OAuth2 Authentication Server to their applications.',
      usedTechnologies: ['NestJS', 'NodeJS', 'TypeScript', 'Angular', 'SCSS'],
      link: '#'
    });
  }

  ngOnInit(): void {}
}
