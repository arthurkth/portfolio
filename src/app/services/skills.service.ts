import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../Skill';
@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private skillsDataUrl = 'assets/skills.json';
  constructor(private http: HttpClient) {}

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.skillsDataUrl);
  }
}
