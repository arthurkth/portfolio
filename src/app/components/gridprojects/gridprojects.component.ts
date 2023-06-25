import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/Project';
import { ProjectsService } from 'src/app/services/projects.service';
@Component({
  selector: 'app-gridprojects',
  templateUrl: './gridprojects.component.html',
  styleUrls: ['./gridprojects.component.css'],
})
export class GridprojectsComponent implements OnInit {
  @Input() projects: Project[] = [];
  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService
      .getProjects()
      .subscribe((items) => (this.projects = items));
  }
}
