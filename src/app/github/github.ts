import {Component, OnInit} from '@angular/core';
import {GithubApi, GithubRepo} from '../github-api';


@Component({
  selector: 'app-github',
  imports: [],
  templateUrl: './github.html',
  styleUrl: './github.scss'
})
export class Github implements OnInit {
  constructor(private readonly githubApi: GithubApi) {}

  githubRepos: Array<GithubRepo> = []

    ngOnInit(): void {
      this.githubApi.getRepos().subscribe({
        next: (response:Array<GithubRepo>) => {
          this.githubRepos = response
        },
        error: (err) => {
          console.error(err)
        }
      })

    }

}
