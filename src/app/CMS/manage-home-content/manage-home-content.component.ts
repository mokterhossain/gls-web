import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { AuthGuardService } from 'src/app/services/auth-guard.service';

@Component({
  selector: 'app-manage-home-content',
  templateUrl: './manage-home-content.component.html',
  styleUrls: ['./manage-home-content.component.css']
})
export class ManageHomeContentComponent implements OnInit {
  homeContent: any;
  formValue !: FormGroup;
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder, public authService: AuthGuardService) { 
    if (!authService.isUserLoggedIn()) {
      this.router.navigate(['/login']);
    }
    this.formValue = this.formBuilder.group({
      banner_headline: [''],
      banner_content: [''],
      benefits_title: [''],
      Our_Expertise: new FormArray([
        this.initExpertise(),
      ]),
      hours_of_operation: new FormArray([
        this.initHoursOfOperation(),
      ]),
      about_us: new FormArray([
        this.initAboutUs(),
      ]),
      
      benefits: new FormArray([
        this.initBenefits(),
      ]),
    });
  }
  initExpertise() {
    return new FormGroup({
      name: new FormControl(''),
      title: new FormControl(''),
      content: new FormControl(''),
    });
  }
  initHoursOfOperation() {
    return new FormGroup({
      title: new FormControl(''),
      operation_hour: new FormControl(''),
    });
  }
  initAboutUs() {
    return new FormGroup({
      title: new FormControl(''),
      sub_title: new FormControl(''),
      content: new FormControl(''),
    });
  }
  initBenefits() {
    return new FormGroup({
      title: new FormControl(''),
      content: new FormControl(''),
    });
  }
  ngOnInit(): void {
    this.getHomeContent();
  }
  getHomeContent(){
    
    this.api.getHomeContent().subscribe({
      next: (res) =>{
        //alert("hi");
        console.log(res);
        this.homeContent = res;
        let control = this.formBuilder.array([]);
        let arrExpertise = new FormArray([]);
        for(var i=0; i< this.homeContent[0].Our_Expertise.length; i++){
          arrExpertise.push(this.formBuilder.group({ 
            name: this.homeContent[0].Our_Expertise[i].name,
            title: this.homeContent[0].Our_Expertise[i].title,
            content: this.homeContent[0].Our_Expertise[i].content,
          }));
          //debugger;
          this.formValue.setControl("Our_Expertise",arrExpertise);
        }
        let arrHoursOfOperation = new FormArray([]);
        for(var i=0; i< this.homeContent[0].hours_of_operation.length; i++){
          arrHoursOfOperation.push(this.formBuilder.group({ 
            title: this.homeContent[0].hours_of_operation[i].title,
            operation_hour: this.homeContent[0].hours_of_operation[i].operation_hour,
          }));
          //debugger;
          this.formValue.setControl("hours_of_operation",arrHoursOfOperation);
        }
        let arrAboutUs = new FormArray([]);
        arrAboutUs.push(this.formBuilder.group({ 
          title: this.homeContent[0].about_us.title,
          sub_title: this.homeContent[0].about_us.sub_title,
          content: this.homeContent[0].about_us.content,
        }));
        //debugger;
        this.formValue.setControl("about_us",arrAboutUs);
        let arrBenefits = new FormArray([]);
        for(var i=0; i< this.homeContent[0].benefits.length; i++){
          arrBenefits.push(this.formBuilder.group({ 
            title: this.homeContent[0].benefits[i].title,
            content: this.homeContent[0].benefits[i].content,
          }));
          //debugger;
          this.formValue.setControl("benefits",arrBenefits);
        }
        debugger;
        this.formValue.patchValue(this.homeContent[0]);
      },
      error: (err) => {
        alert(err);
      }
    })
  }
  getExpertise(form: any) {
    //debugger;
    const cotrols = form.controls.Our_Expertise.controls;
    return form.controls.Our_Expertise.controls;
  }
  getHoursOfOperation(form: any) {
    //debugger;
    return form.controls.hours_of_operation.controls;
  }
  getAboutUs(form: any) {
    //debugger;
    return form.controls.about_us.controls;
  }
  getBenefits(form: any) {
    //debugger;
    return form.controls.benefits.controls;
  }
  
  handleSubmit(){
    //debugger;
    const formValue = this.formValue.value;
    this.api.updateHomeContent(formValue, 1).subscribe((data:any)=>{
      debugger;
    });
  }

}
