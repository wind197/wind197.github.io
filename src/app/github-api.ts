import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubApi {
  constructor(private readonly http: HttpClient) {}

  getRepos(): Observable<any> {
    return this.http.get<Array<GithubRepo>>("https://api.github.com/users/wind197/repos")
  }
}

export interface GithubRepo {
  id: number,
  name: string,
  html_url: string,
  description: string
}
