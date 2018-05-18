import { Component, NgModule } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  template: `
    <h1 [style.color]= "isActive ? 'blue' : 'red' ">{{ title }}</h1>
    <h1 [textContent]="title"></h1>
    <img [src]="image" [alt]="title">

   <div (click)="onClickDiv()">
      <button (click)="onClick($event)" class="btn btn-primary" [class.active]="isActive">das läuft doch!</button>
    </div>

    <h4>EVENT FILTRING</h4>
    <input [(ngModel)]="email" type="text" (keyup.control.enter)="onKeyUp()">
    <p>{{ email }}</p>

    <div class="container">
      <ul class="list group">
        <li class="list-group-item">Titel: {{ course.titre | lowercase | uppercase }}</li>
        <li class="list-group-item">Ratting: {{ course.avis | number:'2.2-3' }}</li>
        <li class="list-group-item">Students: {{ course.participants }}</li>
        <li class="list-group-item">Price: {{ course.prix | currency : 'EUR':'symbol':'3.1-1' }}</li>
        <li class="list-group-item">releaseDate: {{ course.publicationDate | date:'shortDate' }}</li>
      </ul>
    </div>
  `
})

export class CoursesComponent {
  course = {
    titre: 'Formation complète sur Angular',
    avis: '4.9762',
    participants: 136,
    prix: 950.38,
    publicationDate: new Date(2017, 11, 21),
  };

  isActive = true;
  title = 'la lise de mes cours';
  image = 'http://elearndev.net/storage/categories/November2017/angular-5-mohamed-idbrahim.png';
  courses;
  email: String = 'younes@gmail.com';

  constructor(coursesSerivce: CoursesService) {
    this.courses = coursesSerivce.getCourses();
  }

  getTitle() {
    return this.title;
  }

  onClick($event) {
    $event.stopPropagation();
    console.log('button clicked', $event);
  }

  onClickDiv() {
    console.log('div clicked');
  }
  onKeyUp() {
    console.log(this.email);
  }
}
