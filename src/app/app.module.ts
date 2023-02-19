import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { FaqComponent } from './faq/faq.component';
import { CocFormComponent } from './coc-form/coc-form.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SafePipe } from './safe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './authorization/login/login.component';
import { DashboardComponent } from './CMS/dashboard/dashboard.component';
import { ManageHomeContentComponent } from './CMS/manage-home-content/manage-home-content.component';
import { ManageServiceContentComponent } from './CMS/manage-service-content/manage-service-content.component';
import { ManageFaqContentComponent } from './CMS/manage-faq-content/manage-faq-content.component';
import { ManageAboutUsContentComponent } from './CMS/manage-about-us-content/manage-about-us-content.component';
import { ManageContactUsContentComponent } from './CMS/manage-contact-us-content/manage-contact-us-content.component';
import { TestComponent } from './test/test.component';
import { HeaderNavComponent } from './CMS/shared/header-nav/header-nav.component';
import { LeftNavComponent } from './CMS/shared/left-nav/left-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ServicesComponent,
    FaqComponent,
    CocFormComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
    SafePipe,
    LoginComponent,
    DashboardComponent,
    ManageHomeContentComponent,
    ManageServiceContentComponent,
    ManageFaqContentComponent,
    ManageAboutUsContentComponent,
    ManageContactUsContentComponent,
    TestComponent,
    HeaderNavComponent,
    LeftNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
