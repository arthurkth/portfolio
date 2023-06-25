import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';
import { ExperiencesService } from 'src/app/services/experiences.service';
import { SkillsService } from 'src/app/services/skills.service';
import { Card } from 'src/app/Card';
import { Skill } from 'src/app/Skill';

@Component({
  selector: 'app-my-experiences',
  templateUrl: './my-experiences.component.html',
  styleUrls: ['./my-experiences.component.css'],
})
export class MyExperiencesComponent implements OnInit {
  experiences: Card[] = [];
  courses: Card[] = [];
  skills: Skill[] = [];

  constructor(
    private experiencesService: ExperiencesService,
    private coursesService: CoursesService,
    private skillsService: SkillsService
  ) {}

  ngOnInit(): void {
    this.experiencesService
      .getExperiences()
      .subscribe((items) => (this.experiences = items));
    this.coursesService
      .getCourses()
      .subscribe((items) => (this.courses = items));
    this.skillsService.getSkills().subscribe((items) => (this.skills = items));
  }
}
