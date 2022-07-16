import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { ServicesService } from '../services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../users';
import { AdminDetail } from '../classes/admin-details';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  
  private adminDetail = new AdminDetail();

  constructor(private adminService : ServicesService, private router : Router, private http:HttpClient) { }

  ngOnInit() {
  }

  // create the form object.
  form = new FormGroup({
      fullName : new FormControl(null , Validators.required),
      email : new FormControl(null, [Validators.required, Validators.email]),
      password : new FormControl(null , Validators.required),
      confirmPassword : new FormControl(null, Validators.required),
      role : new FormControl(null , Validators.required),
  });

  AdminForm()
  {
     let pass = this.Password?.value;
     let confirmPass = this.ConfirmPassword?.value;

     if(pass == confirmPass)
     {
        this.adminDetail.uname = this.FullName?.value;
        this.adminDetail.email = this.Email?.value;
        this.adminDetail.password = this.Password?.value;
        this.adminDetail.role = this.Role?.value;


        

        this.adminService.signupUser(this.adminDetail).subscribe(
          response => {
            
                this.router.navigate(['login']);
             
          },
          error => {
            alert("error occur while registring User. please try after sometime.")
          }
        );
        
     }
     else
     {
        alert("Password and confirm password not match.");
     }
  }


  get FullName(){
    return this.form.get('fullName');
  }

  get Email(){
      return this.form.get('email');
  }

  get Password(){
      return this.form.get('password');
  }

  get ConfirmPassword(){
      return this.form.get('confirmPassword');
  }

  get Role(){
      return this.form.get('role');
  }





}