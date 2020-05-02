import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class PersonsService {
  personList = ['Max', 'Mervin', 'Mandy'];
  addPerson(name: string) {
    this.personList.push(name);
  }
}
