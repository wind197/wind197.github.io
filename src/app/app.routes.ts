import { Routes } from '@angular/router';
import {Github} from './github/github';
import {About} from './about/about';
import {Home} from './home/home';

export const routes: Routes = [
  {
    path: "",
    component: Home
  },
  {
    path: "github",
    component: Github
  },
  {
    path: "about",
    component: About
  }
];
