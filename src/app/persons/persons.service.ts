import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: "root"
})
export class PersonsService {
  personsChanged = new Subject<string[]>();
  personList = [];

  constructor(private http: HttpClient) {
    this.fetchPersons();
  }

  fetchPersons() {
    this.personList = [];
    this.http.get<any>('https://swapi.dev/api/people')
    .pipe(map(resData => {
      return resData.results.map(item => item.name)
    }))
    .subscribe(
      resData => {
        resData.forEach(element => {
          this.personList.push(element);
        });
      }
    )
    this.personsChanged.next(this.personList);
  }

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
