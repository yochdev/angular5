import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  /*<app-favorite [is-fav]="post.isFavorite"
    (change)="onFavoriteChanged($event)">
    </app-favorite>
  */
  @Input('is-fav') isSelected: boolean;
  @Output('change') click = new EventEmitter();

  myFavorite() {
    this.isSelected = !this.isSelected;
    this.click.emit({newstate: this.isSelected});
  }

  constructor() { }

  ngOnInit() {
  }

}
