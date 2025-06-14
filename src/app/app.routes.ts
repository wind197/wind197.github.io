import { Routes } from '@angular/router';
import {About} from './about/about';
import {Github} from './github/github';

export const routes: Routes = [
  {
    path: 'about',
    component: About
  },
  {
    path: 'github',
    component: Github
  }
];

