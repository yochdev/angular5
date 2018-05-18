import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidator {

  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    /*control c'est notre valeur dont laquelle on veut s'appliquer notre regle*/

    if ((control.value as string).indexOf(' ') >= 0) {
      return {
        cannotContainSpace: true
      };
    }
    return null;
  }
}



