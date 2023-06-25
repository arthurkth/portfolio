import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../Project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projectsDataUrl = 'assets/projects.json';
  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsDataUrl);
  }
}
