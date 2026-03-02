import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {
    path: 'welcome',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
    title: 'Dragon Ball Wild | Home',
  },
  {
    path: 'characters',
    loadComponent: () =>
      import('./characters/characters.component').then(
        (c) => c.CharactersComponent,
      ),
    title: 'Dragon Ball Wild | Enciclopedia',
  },
  {
    path: 'batallas',
    loadComponent: () =>
      import('./batallas/batallas.component').then((c) => c.BatallasComponent),
    title: 'Dragon Ball Wild | Batallas épicas',
  },
  { path: '**', redirectTo: '/welcome' },
];
