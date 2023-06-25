import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormContact } from 'src/app/FormContact';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<FormContact>();

  contactForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.pattern(
          /^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/
        ),
        Validators.required,
      ]),
      email: new FormControl('', [Validators.email, Validators.required]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
  }

  get title() {
    return this.contactForm.get('name')!;
  }
  get phone() {
    return this.contactForm.get('phone')!;
  }
  get email() {
    return this.contactForm.get('email')!;
  }
  get subject() {
    return this.contactForm.get('subject')!;
  }
  get message() {
    return this.contactForm.get('message')!;
  }

  submitForm() {
    if (this.contactForm.invalid) {
      return;
    }

    this.onSubmit.emit(this.contactForm.value);
    this.contactForm.reset();
  }
}
