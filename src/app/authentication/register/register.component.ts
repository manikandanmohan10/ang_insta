import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/authentication/auth.service'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public registrationForm!: FormGroup;

  constructor(private fb:FormBuilder, private ser: AuthService) {  }

  ngOnInit(): void {
    this.registrationForm =  this.fb.group({
      username: this.fb.control(''),
      email_phNo: this.fb.control(''),
      fullName: this.fb.control(''),
      password: this.fb.control('')
    })
  }

  onSubmit(){
    let data = this.registrationForm.value;
    this.ser.registerData(data).subscribe(data => {
      console.log(data)
    })
    console.log(data);
    this.ngOnInit()
  }
}
