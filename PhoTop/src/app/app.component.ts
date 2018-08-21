import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  constructor(private httpService: HttpService) { }

  getPosts() {
    this.httpService.getPosts().subscribe(posts => {
      console.log(posts);
    },
      (error: HttpErrorResponse) => {
        console.log(error.status);
      });
  }

  getPost() {
    this.httpService.getPost(1).subscribe(post => {
      console.log(post);
    });
  }

  getPostByUser() { }

  addPost() {
    const p: Post = ({
      userId: 1,
      id: null,
      title: 'Moj post',
      body: 'Poierwszy post angulara',
    });

    this.httpService.addPost(p).subscribe(post => {
      console.log(post);
    });
  }

  updatePost() {
    const p: Post = ({
      userId: 1,
      id: 1,
      title: 'sunt realksdfj',
      body: 'nowy Wpis',
    });

    this.httpService.updatePost(p).subscribe(post => {
      console.log(post);
    });
  }

  deletePost() {
    this.httpService.deletePost(1).subscribe(post => {
      console.log(post);
    });
  }

  changePost() {
    const p: Post = ({
      id: 1,
      body: 'zmieniam tylko wpis',
    });
    this.httpService.changePost(p).subscribe(post => {
      console.log(post);
    });
  }
}




export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}

