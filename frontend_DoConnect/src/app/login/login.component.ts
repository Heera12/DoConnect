import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminDetail } from '../classes/admin-details';
import { ServicesService } from '../services.service';
import { Users } from '../users';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  
  private adminDetail = new AdminDetail();

  constructor(private adminService : ServicesService, private router : Router) { }

  ngOnInit() {
    /*
    if((this.adminService.isLoggedIn()) )
    {
        this.router.navigate(['/profile' , localStorage.getItem('id')]);
    }
    else
    {
        this.router.navigate(['/login']);
    }
    */
  }

  // create the form object.
  form = new FormGroup({
    uname : new FormControl('' , Validators.required),
    password : new FormControl('' , Validators.required)
  });

  Login()
  {
      this.adminDetail.uname = this.Uname?.value;
      this.adminDetail.password = this.Password?.value;

      this.adminService.loginUser(this.adminDetail).subscribe(
        response => {
            let result =  response;

                      
            window.sessionStorage.setItem("role", response.user.role);
            window.sessionStorage.setItem("token", response.loginDetails.uid);

              if(response.user.role == "user") {
                console.log("*** normal user logged ***");
                this.router.navigate(['userhome']);

              } else if(response.user.role == "admin") {
                console.log("*** admin user logged ***");

                this.router.navigate(['adminhome']);
              
              } else {
                alert ("role not found");
              }
              

           
        },
        error => {
            console.log("Error in authentication");
        }
      );
  }

  get Uname(){
      return this.form.get('uname');
  }

  get Password(){
      return this.form.get('password');
  }

}
