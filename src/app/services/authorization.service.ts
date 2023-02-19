import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
    //apiUrl = "https://gls-web-api.onrender.com/";
  apiUrl = "http://localhost:3001/";

    constructor(private http: HttpClient) { }
    login(email: string, password: string){
        const userData = {
            email: email,
            password:password
          }
        return this.http.post<any>(this.apiUrl + "auth/login", userData);
    }
    apiAuthentication(){
        const userData = {
          email: "rasel.ewu@gmail.com",
          password:"Gls@@54321"
        }
        return this.http.post<any>(this.apiUrl + "auth/login", userData);
    }
    setAccessToken(){
        this.apiAuthentication().subscribe((data: any) => {
            if(localStorage.getItem("access_token")){
                const timeNow = new Date();
                if(localStorage.getItem("access_token_time")){
                    const time = localStorage.getItem("access_token_time");
                    const access_token_time = new Date(time!.toString());
                    const difference = access_token_time.getTime() - timeNow.getTime(); // This will give difference in milliseconds
                    const resultInMinutes = Math.round(difference / 60000);
                    if(resultInMinutes > 55){
                        localStorage.setItem("access_token", data.access_token);
                        localStorage.setItem("access_token_time", new Date().toISOString());
                    }
                }
            } else{
                localStorage.setItem("access_token", data.access_token);
                localStorage.setItem("access_token_time", new Date().toISOString());
            }
            
        });
    }
    getAccessToken(){
        if(localStorage.getItem("access_token")){
            return localStorage.getItem("access_token");
        }
        else{
            this.setAccessToken();
        }
        return localStorage.getItem("access_token");
    }
    getAPIAccessToken(): Observable<any> {
        const userData = {
            email: "rasel.ewu@gmail.com",
            password:"Gls@@54321"
          }
        return this.http.post<any>("auth/login", userData);
      }
    configureCustomHeaders(headers: HttpHeaders): HttpHeaders {
        const token = localStorage.getItem("access_token");
        console.log(token);
        if (token) {
          headers = headers.append("Authorization", `${"Bearer "}${token}`);
        }
        //headers = headers.append("X-EATZ-APICLIENT", "RESTAURANT_WEB");
        return headers;
      }
      
}