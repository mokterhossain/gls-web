import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  serviceContent: any;
  constructor(private titleService:Title, private router: Router, private api: ApiService) { 
    this.titleService.setTitle("Services");
  }

  ngOnInit(): void {
    this.getServiceContent();
  }
  getServiceContent(){
    
    this.api.getOurServices().subscribe({
      next: (res) =>{
        //alert("hi");
        console.log(res);
        debugger;
        this.serviceContent = res[0].services;
      },
      error: (err) => {
        alert(err);
      }
    })
  }

}
