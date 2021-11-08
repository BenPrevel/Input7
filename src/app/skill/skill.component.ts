import { Component, OnInit, Input } from '@angular/core';
import { skill } from '../common/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent implements OnInit {
  @Input() public skill: skill | undefined;

  constructor() {}

  ngOnInit(): void {}
}
