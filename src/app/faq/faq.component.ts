import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("FAQ");
   }

  ngOnInit(): void {
    
      const element = document.querySelector('.bt_bb_accordion_item');
      let elementList = document.querySelectorAll('.bt_bb_accordion_item');
      //alert(elementList.length);
      for(let i=0; i< elementList.length; i++){
          elementList[i].addEventListener("click", () => {
            this.manageAccordion(elementList, i);
        });
      }  

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
