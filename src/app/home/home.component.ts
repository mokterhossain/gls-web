import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // public http : HttpClient;
  public endpoint : string ='';
  public toggle : boolean = false;
  public isSubToggler : boolean = false;
  homeContent: any;
  test: string = "";
  
  constructor(private router: Router, private api: ApiService) { 
    // this.http = httpClient;
  }

  ngOnInit(): void {
    //this.endpoint = "http://localhost:8082/glssendemail/sendemail.php";
    this.endpoint = "http://emailsender.guardianlab.ca/sendemail.php";
    this.getHomeContent();
  }
  getHomeContent(){
    this.api.getHomeContent().subscribe({
      next: (res) =>{
        //alert("hi");
        console.log(res);
        this.homeContent = res;
      },
      error: (err) => {
        alert(err);
      }
    })
  }
  toggleClass(event: any, className: string) {
    const hasClass = document.body.classList.contains(className);
  
    if(hasClass) {
      document.body.classList.remove(className);
    } else {
      document.body.classList.add(className);
    }
  }
  enter(event: any) {
    this.isSubToggler = true;
    //alert('enter');
    //console.log("enter");
    if ( document.body.classList.contains( 'btMenuVertical' ) || document.body.classList.contains( 'btMenuFullScreenCenter' )) {
      return false;
    }
    event.preventDefault();
    this.toggle = !this.toggle;
    return true;
  }

  leave(event: any) {
    //alert('leave');
    //console.log("leave");
    if ( document.body.classList.contains( 'btMenuVertical' ) || document.body.classList.contains( 'btMenuFullScreenCenter' )) {
      return false;
    }
    event.preventDefault();
    this.toggle = !this.toggle;
    this.isSubToggler = false;
    return true;
  }
  subToggler(event: any) {
    
    this.isSubToggler = !this.isSubToggler;
    //event.preventDefault();
    //this.toggle = !this.toggle;
    //return true;
  }
  goToPage(uri: any){
    this.redirectTo(uri)
  }
  redirectTo(uri: any) {
    //this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
   //this.router.navigate([uri]));  
   
   this.router.navigate([uri]);  
  }
  /* sendMessage(): void {
    let name = (document.getElementById("name") as HTMLInputElement).value;
    let email = (document.getElementById("email") as HTMLInputElement).value;
    let subject = (document.getElementById("subject") as HTMLInputElement).value;
    let message = (document.getElementById("message") as HTMLInputElement).value;
    let isValidate : boolean = true;
    if (name === '') {
      //this.showToasterError("Please fill your name", "Validation Error!");
      isValidate = false;
    }
    if (email === '') {
      //this.showToasterError("Please fill your email", "Validation Error!");
      isValidate = false;
    }
    if (subject === '') {
      //this.showToasterError("Please fill your phone", "Validation Error!");
      isValidate = false;
    }
    if (message === '') {
      //this.showToasterError("Please fill your message", "Validation Error!");
      isValidate = false;
    }
    if (isValidate === false){
      return;
    }
    let postVars = {
      email : email,
      name : name,
      subject: subject,
      message : message

    };
    var result = this.http.get(this.endpoint + '?email='+ email +'&name='+ name +'&subject='+ subject +'&message=' + message).subscribe((v => console.log('value: ', v)),
    (e =>{ 
      console.log('error: ', e.error.text);
      if (e.error.text === 'Email successfully sent'){
        //this.showToasterSuccess();
        (document.getElementById("name") as HTMLInputElement).value='';
        (document.getElementById("email") as HTMLInputElement).value='';
        (document.getElementById("subject") as HTMLInputElement).value='';
        (document.getElementById("message") as HTMLInputElement).value='';
      }
      else {
        //this.showToasterError("Something is wrong","Error!");
      }
    } ),
    (() => {
      console.log('the sequence completed!');
      //this.showToasterSuccess();
    }));
  } */
}
