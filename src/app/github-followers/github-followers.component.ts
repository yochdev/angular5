import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(private service: GithubFollowersService ) { }

  ngOnInit() {
    this.getFollowers();
  }

  getFollowers() {
    this.service.getAll()
    .subscribe(data => this.followers = data);
  }
}
