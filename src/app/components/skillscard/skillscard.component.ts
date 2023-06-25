import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/Skill';

@Component({
  selector: 'app-skillscard',
  templateUrl: './skillscard.component.html',
  styleUrls: ['./skillscard.component.css']
})
export class SkillscardComponent implements OnInit {
  @Input() data : Skill[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
