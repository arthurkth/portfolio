import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormContact } from '../FormContact';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiUrl =
    'https://63a59f6af8f3f6d4abfb383d.mockapi.io/api-portfolio/sendEmail';
  constructor(private http: HttpClient) {}

  sendEmail(formContact: FormContact): Observable<FormContact> {
    return this.http.post<FormContact>(this.apiUrl, formContact);
  }
}
