import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DataPrivacyComponent } from './pages/data-privacy/data-privacy.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { PortfolioComponent } from './pages/projects/portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'data-privacy',
    component: DataPrivacyComponent,
  },
  {
    path: 'imprint',
    component: ImprintComponent,
  },
  {
    path: 'projects/portfolio',
    component: PortfolioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
