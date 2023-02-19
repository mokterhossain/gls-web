import { Component } from '@angular/core';
import { AuthorizationService } from './services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gls-website-new';
  constructor(private authenticationService: AuthorizationService){
    //this.authenticationService.setAccessToken();
    //this.authenticationService.getAccessToken();
  }
  ngAfterContentInit(){
    //this.authenticationService.getAccessToken();
  }
}
