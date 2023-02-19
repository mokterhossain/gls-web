import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqContent: any;
  constructor(private titleService:Title, private router: Router, private api: ApiService) {
    this.titleService.setTitle("FAQ");
    
   }

  ngOnInit(): void {    
    this.loadFaqContent();
  }
  loadFaqContent(){
    this.api.getFaq().subscribe({
      next: (res) =>{
        //alert("hi");
        console.log(res);
        this.faqContent = res[0]?.faqs;
      },
      error: (err) => {
        alert(err);
      }
    });
  }
  handleAccordion(index: any){
    const element = document.querySelector('.bt_bb_accordion_item');
    let elementList = document.querySelectorAll('.bt_bb_accordion_item');
    //alert(elementList.length);
    this.manageAccordion(elementList, index);
  }
  manageAccordion(elementList: any, index: any){
    for(let i=0; i< elementList.length; i++){
      if(i != index){
        elementList[i].classList.remove('on');
      }
      if(i === index){
        const hasClass = elementList[index].classList.contains('on');
  
        if(hasClass) {
          elementList[index].classList.remove('on');
        } else {
          elementList[index].classList.add('on');
    }
      }
      //elementList[index].classList.add('on');
    }
  }
  someEventHander=function(event:any,param1:any,param2:any){
    console.log(event,param1,param2);
  }
}
