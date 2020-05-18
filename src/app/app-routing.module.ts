import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DataPrivacyComponent } from './pages/data-privacy/data-privacy.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { PortfolioComponent } from './pages/projects/portfolio/portfolio.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DailyBlogN0001Component } from './pages/blog/articles/daily-blog-n0001/daily-blog-n0001.component';

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
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'blog/articles/daily-blog-0001',
    component: DailyBlogN0001Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
