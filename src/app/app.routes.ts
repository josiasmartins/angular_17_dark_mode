import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/components/home.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    {
        path: 'home',
        loadComponent: () => import('./views/home/components/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./views/login/components/login.component').then(c => c.LoginComponent)
    }
];
