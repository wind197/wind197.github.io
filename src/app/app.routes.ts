import { Routes } from '@angular/router';
import {Github} from './github/github';
import {Home} from './home/home';
import {Projects} from './projects/projects';

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
    path: "projects",
    component: Projects
  }
];
