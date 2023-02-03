import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { PostComponent } from './posts/post/post.component';
import { HomeComponent } from './home/home.component';
import { VerificationComponent } from './authentication/verification/verification.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'verification', component: VerificationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'post', component: PostComponent},
  {path: '**', redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
