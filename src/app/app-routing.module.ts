import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ServicesComponent} from './services/services.component';
import {FaqComponent} from './faq/faq.component';
import {CocFormComponent} from './coc-form/coc-form.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import { LoginComponent } from './authorization/login/login.component';
import { DashboardComponent } from './CMS/dashboard/dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ManageHomeContentComponent } from './CMS/manage-home-content/manage-home-content.component';
import { ManageServiceContentComponent } from './CMS/manage-service-content/manage-service-content.component';
import { ManageFaqContentComponent } from './CMS/manage-faq-content/manage-faq-content.component';
import { ManageAboutUsContentComponent } from './CMS/manage-about-us-content/manage-about-us-content.component';
import { ManageContactUsContentComponent } from './CMS/manage-contact-us-content/manage-contact-us-content.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'services',component:ServicesComponent},
  {path:'faq',component:FaqComponent},
  {path:'cocforms',component:CocFormComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'login',component:LoginComponent},
  {
    path:'dashboard',
    component:DashboardComponent,
    canLoad: [AuthGuardService]
  },
  {
    path:'manage-home',
    component:ManageHomeContentComponent,
    canLoad: [AuthGuardService]
  },
  {
    path:'manage-services',
    component:ManageServiceContentComponent,
    canLoad: [AuthGuardService]
  },
  {
    path:'manage-faq',
    component:ManageFaqContentComponent,
    canLoad: [AuthGuardService]
  },
  {
    path:'manage-about-us',
    component:ManageAboutUsContentComponent,
    canLoad: [AuthGuardService]
  },
  {
    path:'manage-contact-us',
    component:ManageContactUsContentComponent,
    canLoad: [AuthGuardService]
  },
  {
    path:'test',
    component:TestComponent,
    canLoad: [AuthGuardService]
  },
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
