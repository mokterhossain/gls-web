import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //apiUrl = "https://gls-web-api.onrender.com/";
  apiUrl = "http://localhost:3001/";

  constructor(private http: HttpClient, private authenticationService: AuthorizationService) { }

  apiAuthentication(){
    const userData = {
      email: "rasel@gmail.com",
      password:"Gls@@54321"
    }
    return this.http.post<any>(this.apiUrl + "auth/login", userData);
  }
  getHomeContent(){
    return this.http.get<any>(this.apiUrl + "home-content/");
  }
  updateHomeContent(data: any, id: number){
    this.authenticationService.getAccessToken();
    const headers = this.authenticationService.configureCustomHeaders(new HttpHeaders());
    return this.http.patch<any>(this.apiUrl + "home-content/"+ id, data, {headers});
  }
  // OUR SERVICES
  getOurServices(){
    return this.http.get<any>(this.apiUrl + "our_services/");
  }
  updateOurServices(data: any, id: number){
    this.authenticationService.getAccessToken();
    const headers = this.authenticationService.configureCustomHeaders(new HttpHeaders());
    return this.http.patch<any>(this.apiUrl + "our_services/"+ id, data, {headers});
  }
  // FAQ
  getFaq(){
    return this.http.get<any>(this.apiUrl + "faq/");
  }
  updateFaq(data: any, id: number){
    this.authenticationService.getAccessToken();
    const headers = this.authenticationService.configureCustomHeaders(new HttpHeaders());
    return this.http.patch<any>(this.apiUrl + "faq/"+ id, data, {headers});
  }
  // ABOUT US
  getAboutUs(){
    return this.http.get<any>(this.apiUrl + "about_us/");
  }
  updateAboutUs(data: any, id: number){
    this.authenticationService.getAccessToken();
    const headers = this.authenticationService.configureCustomHeaders(new HttpHeaders());
    return this.http.patch<any>(this.apiUrl + "about_us/"+ id, data, {headers});
  }
  // CONTACT US
  getContactUs(){
    return this.http.get<any>(this.apiUrl + "contact_us/");
  }
  updateContactUs(data: any, id: number){
    this.authenticationService.getAccessToken();
    const headers = this.authenticationService.configureCustomHeaders(new HttpHeaders());
    return this.http.patch<any>(this.apiUrl + "contact_us/"+ id, data, {headers});
  }
  
}
