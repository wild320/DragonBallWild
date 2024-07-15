import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },  
  {
    path: 'characters',
    component: CharactersComponent
  }
];
