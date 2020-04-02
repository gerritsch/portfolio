import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  constructor(@Inject(LOCALE_ID) public localeId: string) {}

  ngOnInit(): void {}
}
