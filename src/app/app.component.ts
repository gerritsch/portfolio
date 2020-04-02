import { Component } from '@angular/core';
import { NgcCookieConsentService } from 'ngx-cookieconsent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private ccService: NgcCookieConsentService) {
    if (!ccService.hasConsented()) {
      ccService.open();
    }
  }
}
