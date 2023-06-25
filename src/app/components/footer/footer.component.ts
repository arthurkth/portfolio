import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormContact } from 'src/app/FormContact';
import { EmailService } from 'src/app/services/email.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(
    private emailService: EmailService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  async sendEmail(formContact: FormContact) {
    this.emailService.sendEmail(formContact).subscribe(
      (response) => {
        this.snackBar.open('Requisição enviada com sucesso', 'Fechar', {
          duration: 3000,
        });
      },
      (error) => {
        this.snackBar.open('Ocorreu um erro ao enviar a requisição', 'Fechar', {
          duration: 3000,
        });
      }
    );
    
  }
}
