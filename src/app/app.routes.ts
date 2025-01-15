import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClientsComponent } from './components/clients/clients.component';
import { AboutComponent } from './components/about/about.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { ArticlePublishComponent } from './components/article-publish/article-publish.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: AdminLoginComponent },
  { path: 'publish-article', component: ArticlePublishComponent },
];
