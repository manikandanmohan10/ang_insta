import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public registrationForm: FormGroup;

  constructor() {
    this.registrationForm = new FormGroup({
      username: new FormControl(''),
      email_phNo: new FormControl(''),
      fullName: new FormControl(''),
      password: new FormControl('')
    })
  }


  onSubmit(){
    let data = this.registrationForm.value;
    console.log(data);
  }
}
