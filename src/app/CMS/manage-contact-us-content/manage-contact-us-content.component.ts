import { Component, OnInit } from '@angular/core';
import { FormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

@Component({
  selector: 'app-manage-contact-us-content',
  templateUrl: './manage-contact-us-content.component.html',
  styleUrls: ['./manage-contact-us-content.component.css']
})
export class ManageContactUsContentComponent implements OnInit {

  ContactUsContent: any;
  formValue !: UntypedFormGroup;
  constructor(private router: Router, private api: ApiService, private formBuilder: UntypedFormBuilder, public authService: AuthGuardService) { 
    if (!authService.isUserLoggedIn()) {
      this.router.navigate(['/login']);
    }
    this.formValue = this.formBuilder.group({
      working_hours: [""],
      location: [""],
      call_center: [""],
      email_us: [""],
    });
  }

  ngOnInit(): void {
    this.getContactUsContent();
  }
  
  getContactUsContent(){
    this.api.getContactUs().subscribe({
      next: (res) =>{
        this.ContactUsContent = res;
        /*let arrContactUs = new FormArray([]);
        for(var i=0; i< this.ContactUsContent[0].ContactUss.length; i++){
          arrContactUs.push(this.formBuilder.group({ 
            title: this.ContactUsContent[0].ContactUss[i].title,
            content: this.ContactUsContent[0].ContactUss[i].content,
          }));
          //debugger;
          this.formValue.setControl("ContactUss",arrContactUs);
        }*/
        this.formValue.patchValue(this.ContactUsContent[0]);
      },
      error: (err) => {
        alert(err);
      }
    });
  }
  initContactUs() {
    return new UntypedFormGroup({
      title: new UntypedFormControl(''),
      content: new UntypedFormControl(''),
    });
  }
  getContactUs(form: any) {
    //debugger;
    return form.controls.ContactUss.controls;
  }
  handleSubmit(){
    //debugger;
    const formValue = this.formValue.value;
    this.api.updateContactUs(formValue, 1).subscribe((data:any)=>{
      debugger;
    });
  }

}
