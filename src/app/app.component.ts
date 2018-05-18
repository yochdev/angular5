import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  body = 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target.Angul';

  post = {
    titre : 'angular5',
    isFavorite: true
  };

  personne = {
    name: 'Younes Cherkaoui',
    tel: '017680451748',
    adresse : {
      stadt : 'Mainz',
      plz: 55118
    }

  };

  onFavoriteChanged(args) {
    console.log('Favorite changed :' , args);
  }
}
