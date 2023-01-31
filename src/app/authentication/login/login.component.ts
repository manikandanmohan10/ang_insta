import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private ser: AuthService){}

  ngOnInit(){
    this.loginForm = this.fb.group({
      username: this.fb.control(''),
      password: this.fb.control('')
    })
  }
  onSubmit(){
    let data_ = this.loginForm.value;
    this.ser.loginData(data_).subscribe((data: any) => {
      console.log(data_)
      if(data.statusCode == 200){
        this.ser.router.navigate(['/post'])
      }
    })
    // console.log(this.loginForm.value)
  }
}
