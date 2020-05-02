import { Component, OnInit, OnDestroy } from '@angular/core'
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit,OnDestroy {
  personSubscription: Subscription;
  personList: string[];

  constructor(private personService: PersonsService) {}

  ngOnInit(): void {
    this.personList = this.personService.personList;
    this.personSubscription = this.personService.personsChanged.subscribe(persons => {
      this.personList = persons;
    })
  }

  ngOnDestroy(): void {
    this.personSubscription.unsubscribe();
  }

  onRemovePerson(person: string) {
    this.personService.removePerson(person);
  }
}
