import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

@Component({
  selector: 'app-manage-about-us-content',
  templateUrl: './manage-about-us-content.component.html',
  styleUrls: ['./manage-about-us-content.component.css']
})
export class ManageAboutUsContentComponent implements OnInit {

  AboutUsContent: any;
  formValue !: UntypedFormGroup;
  constructor(private router: Router, private api: ApiService, private formBuilder: UntypedFormBuilder, public authService: AuthGuardService) { 
    if (!authService.isUserLoggedIn()) {
      this.router.navigate(['/login']);
    }
    this.formValue = this.formBuilder.group({
      title: [""],
      sub_title: [""],
      content: [""],
      our_team_title: [""],
      our_team: new UntypedFormArray([
        this.initOurTeam(),
      ]),
    });
  }

  ngOnInit(): void {
    this.getAboutUsContent();
  }
  
  getAboutUsContent(){
    this.api.getAboutUs().subscribe({
      next: (res) =>{
        this.AboutUsContent = res;
        let arrOurTeam = new UntypedFormArray([]);
        for(var i=0; i< this.AboutUsContent[0].our_team.length; i++){
          arrOurTeam.push(this.formBuilder.group({ 
            title: this.AboutUsContent[0].our_team[i].title,
            name: this.AboutUsContent[0].our_team[i].name,
            degree: this.AboutUsContent[0].our_team[i].degree,
            designation: this.AboutUsContent[0].our_team[i].designation,
          }));
          //debugger;
          this.formValue.setControl("our_team",arrOurTeam);
        }
        this.formValue.patchValue(this.AboutUsContent[0]);
      },
      error: (err) => {
        alert(err);
      }
    });
  }
  initOurTeam() {
    return new UntypedFormGroup({
      title: new UntypedFormControl(''),
      name: new UntypedFormControl(''),
      degree: new UntypedFormControl(''),
      designation: new UntypedFormControl(''),
    });
  }
  getOurTeam(form: any) {
    //debugger;
    return form.controls.our_team.controls;
  }
  handleSubmit(){
    //debugger;
    const formValue = this.formValue.value;
    this.api.updateAboutUs(formValue, 1).subscribe((data:any)=>{
      debugger;
    });
  }

}
