import { BadInput } from './../shared/bad-input';
import { NotFoundError } from './../shared/not-found-error';
import { AppError } from './../shared/app-error';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  constructor(private url: string, private http: Http) { }

  getAll() {
    console.log( 'URL: ' + this.url);
    return this.http.get(this.url)
               .map(response => response.json())
               .catch(this.handleError);
  }

  create(resource) {
    return this.http.post(this.url, resource)
                    .map(response => response.json())
                    .catch(this.handleError);
  }

  delete(resource) {
    return this.http.delete(this.url + '/' + resource.id)
                    .map(response => response.json())
                    .catch(this.handleError);

  }

  update(resource) {
    return this.http.put(this.url + '/' + resource.id, resource)
                    .map(response => response.json())
                    .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400 ) {
      return Observable.throw(new BadInput);
      }
    if (error.status === 404 ) {
      return Observable.throw(new NotFoundError);
     }
     return Observable.throw(new AppError);

  }

}
/*
   *Catch: Methode hat einen Rückgabetype observable:
   *              import { Observable } from 'rxjs/Observable';
   *error: variable callback und ihre Type ist response
   * Um Catch zu verwenden, sollen wir folgendes Package importieren:
   *              import 'rxjs/add/operator/catch'
   * die Methode catch spielt dabei die Rolle der Fehlerbehandlung im Service
   *In dieser Klasse Observable haben wir eine Methode THROW, in dem wir ein Objekt vom Type Error erzeugen.
   * Damit die Methode Throw type von der Klasse Observable ist, sollen wir folgendes importieren
   *          import 'rxjs/add/observable/throw';
   */
