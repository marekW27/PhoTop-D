import { Injectable } from '@angular/core';
import { Post } from './app.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  /** Pobieram wszystkie posty */
  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts');
  }

  /**Pobieram jeden post */
  getPost(id: number): Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  /**Pobieram wszystkie posty usera podajac w parrametrze jego userID */

  getPostByUser(userId: number) {
    const parm = new HttpParams().set('userId', userId + '');
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts/');
  }


  /**dodajemy nowy post */
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', post);

  }

  /**aktualizujemy/Podmieniemay post */

  updatePost(post: Post): Observable<Post> {
    return this.http.put('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
  }

  /**usuwamy Post */

  deletePost(id: number) {
    return this.http.delete<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  /**aktualizujemy pola w post */

  changePost(post: Post): Observable<Post> {
    return this.http.patch('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
  }
}
