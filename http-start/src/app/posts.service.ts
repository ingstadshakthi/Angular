import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map, throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  error = new Subject<string>;

  public posts: Post[] = [];

  constructor(private http: HttpClient) { }

  createAndStore(title: string, content: string) {
    const postData = { title, content }
    this.http
      .post('http://localhost:3000/', postData, { observe: 'response' })
      .subscribe(res => {
        console.log(res);
      }, error => {
        this.error.next(error.error.message);
      });
  }

  fetchPosts() {
    const headers = new HttpHeaders({ 'Custom-header': 'Hello' });
    const params = new HttpParams().set('print', 'pretty');
    return this.http.get('http://localhost:3000/', { headers, params })
      .pipe(map(data => data),
        catchError(err => throwError(err)))
  }

  deleteAllPosts() {
    return this.http.delete('http://localhost:3000/', {
      observe: 'events',
      responseType: 'json'
    });
  }

}

export interface Post {
  title: string,
  content: string,
  id: number
}