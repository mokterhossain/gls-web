import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

@Component({
  selector: 'app-manage-faq-content',
  templateUrl: './manage-faq-content.component.html',
  styleUrls: ['./manage-faq-content.component.css']
})
export class ManageFaqContentComponent implements OnInit {

  FaqContent: any;
  formValue !: FormGroup;
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder, public authService: AuthGuardService) { 
    if (!authService.isUserLoggedIn()) {
      this.router.navigate(['/login']);
    }
    this.formValue = this.formBuilder.group({
      faqs: new FormArray([
        this.initFaq(),
      ]),
    });
  }

  ngOnInit(): void {
    this.getFaqContent();
  }
  
  getFaqContent(){
    this.api.getFaq().subscribe({
      next: (res) =>{
        this.FaqContent = res;
        let arrFaq = new FormArray([]);
        for(var i=0; i< this.FaqContent[0].faqs.length; i++){
          arrFaq.push(this.formBuilder.group({ 
            title: this.FaqContent[0].faqs[i].title,
            content: this.FaqContent[0].faqs[i].content,
          }));
          //debugger;
          this.formValue.setControl("faqs",arrFaq);
        }
        this.formValue.patchValue(this.FaqContent[0]);
      },
      error: (err) => {
        alert(err);
      }
    });
  }
  initFaq() {
    return new FormGroup({
      title: new FormControl(''),
      content: new FormControl(''),
    });
  }
  getFaq(form: any) {
    //debugger;
    return form.controls.faqs.controls;
  }
  handleSubmit(){
    //debugger;
    const formValue = this.formValue.value;
    this.api.updateFaq(formValue, 1).subscribe((data:any)=>{
      debugger;
    });
  }


}
