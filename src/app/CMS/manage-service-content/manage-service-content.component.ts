import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

@Component({
  selector: 'app-manage-service-content',
  templateUrl: './manage-service-content.component.html',
  styleUrls: ['./manage-service-content.component.css']
})
export class ManageServiceContentComponent implements OnInit {
  serviceContent: any;
  formValue !: FormGroup;
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder, public authService: AuthGuardService) { 
    if (!authService.isUserLoggedIn()) {
      this.router.navigate(['/login']);
    }
    this.formValue = this.formBuilder.group({
      services: new FormArray([
        this.initService(),
      ]),
    });
  }

  ngOnInit(): void {
    this.getServiceContent();
  }
  
  getServiceContent(){
    this.api.getOurServices().subscribe({
      next: (res) =>{
        this.serviceContent = res;
        let arrService = new FormArray([]);
        for(var i=0; i< this.serviceContent[0].services.length; i++){
          arrService.push(this.formBuilder.group({ 
            name: this.serviceContent[0].services[i].name,
            title: this.serviceContent[0].services[i].title,
            sub_heading: this.serviceContent[0].services[i].sub_heading,
            description: this.serviceContent[0].services[i].description,
          }));
          //debugger;
          this.formValue.setControl("services",arrService);
        }
        this.formValue.patchValue(this.serviceContent[0]);
      },
      error: (err) => {
        alert(err);
      }
    });
  }
  initService() {
    return new FormGroup({
      name: new FormControl(''),
      title: new FormControl(''),
      sub_heading: new FormControl(''),
      description: new FormControl(''),
    });
  }
  getService(form: any) {
    //debugger;
    return form.controls.services.controls;
  }
  handleSubmit(){
    //debugger;
    const formValue = this.formValue.value;
    this.api.updateOurServices(formValue, 1).subscribe((data:any)=>{
      debugger;
    });
  }

}
