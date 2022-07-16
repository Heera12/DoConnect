import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UnapprovedComponent } from './unapproved/unapproved.component';
import { ChatComponent } from './chat/chat.component';



const routes: Routes = [
{path :'login' ,component: LoginComponent},
{path:'signup',component: SignupComponent},
{path :'userhome' ,component: UserhomeComponent},
{path :'adminhome' ,component: AdminhomeComponent},
{path :'unapproved' ,component: UnapprovedComponent},
{path :'chat' ,component: ChatComponent},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
