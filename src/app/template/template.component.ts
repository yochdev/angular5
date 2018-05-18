import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  courses = ['laravel', 'angular', 'Vuejs'];

  formations;
  viewCourse = '';
  constructor() { }

  ngOnInit() {
  }

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

}
