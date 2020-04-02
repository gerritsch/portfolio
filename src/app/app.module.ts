import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselModule } from 'primeng/carousel';
import { ContactComponent } from './components/contact/contact.component';
import { ToastrModule } from 'ngx-toastr';
import { DataPrivacyComponent } from './pages/data-privacy/data-privacy.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'amazing-johnson-d64a3d.netlify.com/' // it is recommended to set your domain, for cookies to work properly
  },
  palette: {
    popup: {
      background: '#404040'
    },
    button: {
      background: '#ed2945'
    }
  },
  theme: 'edgeless',
  type: 'info',
  content: {
    message: 'By using our site, you acknowledge and accept the use of cookies.'
  }
};
@NgModule({
  declarations: [
    AppComponent,
    ScrollTopComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    FooterComponent,
    ContactComponent,
    DataPrivacyComponent,
    ImprintComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    FontAwesomeModule,
    CarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
