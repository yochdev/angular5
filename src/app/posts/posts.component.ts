import { NotFoundError } from './../shared/not-found-error';
import { AppError } from './../shared/app-error';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { BadInput } from '../shared/bad-input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  status = true;

  post = {
    id: 0,
    title: '',
    body: '',
    userId: 0
  };

  constructor(private postService: PostService) {
   }

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    this.postService.getAll()
    .subscribe(
          post =>  this.posts = post,
          error => {
            alert('Unexpected error');
            console.log(error);
          });
  }

  createPost() {
    this.postService.create(this.post)
        .subscribe( newPost => {
          console.log(newPost.json());
          this.post.id = newPost.id;
          this.posts.unshift(this.post);
          this.post = {
            id: 0,
            title: '',
            body: '',
            userId: 0
          };
        }, (error: AppError) => {
          if ( error instanceof BadInput ) {
          alert('merci de vérifié vos information');
          } else {
           alert('Unexpected error');
            console.log(error);
            }
          });
  }

  editPost(post) {
    this.post = post;
    this.status = false;
  }

  /*
  * post.id : le post current
  * Argument 2 Error: es wird dabei die Error handling behandelt
  */
  deletePost(post) {
    this.postService.delete(123)
    .subscribe(() => {
      const index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    }, (error: AppError) => {
        if ( error instanceof NotFoundError) {
          alert ('ce post est déja supprimé');
       } else {
          alert('Unexpected error');
          console.log(error);
       }
    });
  }

  // error hat einen Rückgabetyp Response
  updatePost() {
    this.postService.update(this.post)
    .subscribe(() => {
      this.post = {
        id: 0,
        title: '',
        body: '',
        userId: 0
      };
      this.status = true;
    }, error => {
      alert('Unexpected error');
      console.log(error);
    });
  }
}
