import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isLoading = false;
  error: null | string = null;
  errorSub!: Subscription;

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.errorSub = this.postService.error
      .subscribe(errorMessage => {
        this.error = errorMessage;
      });
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.postService
      .createAndStore(postData.title, postData.content)

  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
    this.postService.deleteAllPosts().subscribe((data) => this.fetchPosts());;
  }

  private fetchPosts() {
    this.isLoading = true;
    this.postService.fetchPosts().subscribe((data: any) => {
      this.isLoading = false;
      this.loadedPosts = data.data
    }, error => {
      this.isLoading = false;
      this.error = error.error.message
      // console.log(error.error.message)
    })
  }
  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  onHandleError() {
    this.error = null;
  }
}

export interface Post {
  title: string,
  content: string,
  id: number
}