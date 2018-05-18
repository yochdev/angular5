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

  courses = ['laravel', 'angular', 'Vuejs'];

  formations;
  viewCourse = '';

  loadList() {
    this.formations = [
      {id: 1, title: 'Laravel'},
      {id: 2, title: 'Angular'},
      {id: 3, title: 'Symfony'},
      {id: 4, title: 'AdonisJS'},
      {id: 5, title: 'VueJS'}
    ];
  }
  trackformation(index, formation) {
    return formation ? formation.id : undefined;

  }
  addFormation() {
    this.formations.push({id: 6, title: 'ReactJS'});
  }

  removeFormation(formation) {
    const index = this.formations.indexOf(formation);
    this.formations.splice(index, 1);
  }

  editFormation(formation) {
    formation.title = 'Update';
  }


  onFavoriteChanged(args) {
    console.log('Favorite changed :' , args);
  }
}
