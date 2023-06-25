import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../Card';

@Injectable({
  providedIn: 'root',
})
export class ExperiencesService {
  private experiencesDataUrl = 'assets/experiences.json';
  constructor(private http: HttpClient) {}

  getExperiences(): Observable<Card[]> {
    return this.http.get<Card[]>(this.experiencesDataUrl);
  }
}
