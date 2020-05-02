import { Injectable } from '@angular/core';
import { Subject} from 'rxjs'

@Injectable({
  providedIn: "root"
})
export class PersonsService {
  personsChanged = new Subject<string[]>();
  personList = ['Max', 'Mervin', 'Mandy'];

  addPerson(name: string) {
    this.personList.push(name);
    this.personsChanged.next(this.personList);
  }

  removePerson(name: string) {
    this.personList = this.personList.filter(person => {
      return (person !== name);
    });
    console.log(this.personList);
    this.personsChanged.next(this.personList);
  }
}
