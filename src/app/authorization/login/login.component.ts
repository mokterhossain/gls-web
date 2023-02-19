import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formValue !: UntypedFormGroup;
  isLoggedIn = false;
  constructor(private formBuilder: UntypedFormBuilder, private authorizationService: AuthorizationService, private router: Router) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }
  isUserLoggedIn(){
    if(localStorage.getItem("access_token")){
      this.isLoggedIn = true;
    }
    else{
      this.isLoggedIn = false;
    }
  }
  login(){
    debugger;
    const email = this.formValue.value.email;
    const pass = this.formValue.value.password;
    this.authorizationService.login(email, pass).subscribe((data) =>{
      debugger;
      localStorage.setItem("access_token", data.access_token);
      this.router.navigate(['/manage-home']);
    });

  }
}
