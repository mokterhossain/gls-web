import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  googleLocationUrl:any;
  constructor(private router: Router,private titleService:Title) { 
    this.googleLocationUrl="https://maps.google.com/maps?q=2280%2039%20Ave%20NE,%20Calgary,%20AB%20T2E%206P7,%20Canada&t=&z=13&ie=UTF8&iwloc=&output=embed";
    this.titleService.setTitle("Contact Us");
  }

  ngOnInit(): void {
  }
  goToPage(uri: any){
    this.redirectTo(uri)
  }
  redirectTo(uri: any) {
    //this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
   //this.router.navigate([uri]));  
   
   this.router.navigate([uri]);  
  }
}
