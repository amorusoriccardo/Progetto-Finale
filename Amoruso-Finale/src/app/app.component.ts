import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Utenti } from './utenti';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amoruso-Finale';
  myForm: FormGroup
  vettoreUT: Utenti[] = [{ username: "Anastasia", password: "mipiacelacalifornia", email:"ana.california@gmail.com" }, { username: "Riccardo", password: "aisatsana", email:'tricky.amoruso@gmail.com' }]
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
      'email' :['', Validators.required]
    });
  }
  onSub() {
    if (this.myForm.valid) {
      let UT: Utenti = new Utenti();
      UT.username = this.myForm.controls['username'].value;
      UT.password = this.myForm.controls['password'].value;
      this.vettoreUT.push(UT);
      console.log("Utente  registrtato: " + UT.username);
    }
    else {

    }
  }
  onSubmit(value: string): void {
    console.log('username', this.myForm.controls['username'].value);
    console.log('password', this.myForm.controls['password'].value);
    this.onSub();
  }

}

