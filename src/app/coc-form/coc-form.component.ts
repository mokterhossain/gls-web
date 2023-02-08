import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-coc-form',
  templateUrl: './coc-form.component.html',
  styleUrls: ['./coc-form.component.css']
})
export class CocFormComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("COC Form");
   }

  ngOnInit(): void {
  }

}
