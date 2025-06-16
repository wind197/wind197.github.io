import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavBar} from './nav-bar/nav-bar';
import {Footer} from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'wind197.github.io';
}
