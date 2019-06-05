import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utenti } from '../utenti';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() loggedUser : Utenti;
  @Input() utenti : Utenti[];
  @Output() userLogin = new EventEmitter<Utenti>();
  formLog : FormGroup;
  constructor(fb : FormBuilder) {
    this.formLog = fb.group(
      {
        email : ['', [Validators.required, Validators.email]],
        password : ['', Validators.required]
      }
    )
  }
  login()
  {
    for(let i = 0; i < this.utenti.length; i++)
    {
      if(this.formLog.controls['email'].value == this.utenti[i].email &&
        this.formLog.controls['password'].value == this.utenti[i].password)
      {
        this.loggedUser = this.utenti[i];
        this.userLogin.emit(this.loggedUser);
        console.log(this.loggedUser);
        break;
      }
    }
  }
  ngOnInit() {
  }

}
