import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  aboutUsContent: any;
  ourTeam: any;
  constructor(private titleService:Title, private router: Router, private api: ApiService) { 
    this.titleService.setTitle("About Us");
  }

  ngOnInit(): void {
    this.loadAboutUsContent();
  }
  loadAboutUsContent(){
    this.api.getAboutUs().subscribe({
      next: (res) =>{
        //alert("hi");
        console.log(res);
        debugger;
        this.aboutUsContent = res[0];
        this.ourTeam = this.aboutUsContent.our_team;
      },
      error: (err) => {
        alert(err);
      }
    });
  }
}
