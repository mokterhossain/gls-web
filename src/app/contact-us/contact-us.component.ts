import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Title} from "@angular/platform-browser";
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  googleLocationUrl:any;
  contactUsContent: any;
  openingHours: any;
  constructor(private router: Router,private titleService:Title, private api: ApiService) { 
    this.googleLocationUrl="https://maps.google.com/maps?q=2280%2039%20Ave%20NE,%20Calgary,%20AB%20T2E%206P7,%20Canada&t=&z=13&ie=UTF8&iwloc=&output=embed";
    this.titleService.setTitle("Contact Us");
  }

  ngOnInit(): void {
    this.loadContactus();
    this.loadOpeningHours();
  }
  loadContactus(){
    this.api.getContactUs().subscribe({
      next: (res) =>{
        //alert("hi");
        console.log(res);
        this.contactUsContent = res[0];
      },
      error: (err) => {
        alert(err);
      }
    });
  }
  loadOpeningHours(){
    
    this.api.getHomeContent().subscribe({
      next: (res) =>{
        //alert("hi");
        console.log(res);
        this.openingHours = res[0]?.hours_of_operation;
      },
      error: (err) => {
        alert(err);
      }
    })
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
