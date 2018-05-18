import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {

  maLimit: number;
  transform(value: string, limit?: number): any {

    if (!value) {
      return null;
    }
    this.maLimit = (limit) ? limit : 20;

    return 'Das ergebnis von "resume.pipe.ts" : ' + value.substr(0, this.maLimit) + '...' ;

  }
}
