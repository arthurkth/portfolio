import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../Card';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private coursesDataUrl = 'assets/courses.json';

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Card[]> {
    return this.http.get<Card[]>(this.coursesDataUrl);
  }
}
