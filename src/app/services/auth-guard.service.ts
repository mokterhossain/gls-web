import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanLoad {

  constructor(private router: Router) { debugger;}

  canLoad(route: Route) {
    
    if (localStorage.getItem('access_token')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  isUserLoggedIn(){
    if(localStorage.getItem("access_token")){
      return  true;
    }
    else{
      return false;
    }
  }
}
