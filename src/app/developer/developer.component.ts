import { Component, OnInit } from '@angular/core';
import { developer } from '../common/developer.model';
import { skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent implements OnInit {
  public developer: developer | undefined;

  constructor() {}

  ngOnInit(): void {
    this.developer = new developer(
      'Mich',
      'mich',
      25,
      'Male',
      'ex. special forces become a cat lover',
      [
        new skill('Java', 'assets/JavaLogo.png', 'https://www.java.com/fr/'),

        new skill('Angular', 'assets/AngularLogo.png', 'https://angular.io/'),
      ]
    );
  }
}
