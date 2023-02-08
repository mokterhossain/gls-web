import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public toggle : boolean = false;
  public isSubToggler : boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  toggleClass(event: any, className: string) {
    const hasClass = document.body.classList.contains(className);
  
    if(hasClass) {
      document.body.classList.remove(className);
    } else {
      document.body.classList.add(className);
    }
  }
  enter(event: any) {
    this.isSubToggler = true;
    //alert('enter');
    //console.log("enter");
    if ( document.body.classList.contains( 'btMenuVertical' ) || document.body.classList.contains( 'btMenuFullScreenCenter' )) {
      return false;
    }
    event.preventDefault();
    this.toggle = !this.toggle;
    return true;
  }

  leave(event: any) {
    //alert('leave');
    //console.log("leave");
    if ( document.body.classList.contains( 'btMenuVertical' ) || document.body.classList.contains( 'btMenuFullScreenCenter' )) {
      return false;
    }
    event.preventDefault();
    this.toggle = !this.toggle;
    this.isSubToggler = false;
    return true;
  }
  subToggler(event: any) {
    
    this.isSubToggler = !this.isSubToggler;
    //event.preventDefault();
    //this.toggle = !this.toggle;
    //return true;
  }
  goToPage(uri: any){
    this.redirectTo(uri)
  }
  redirectTo(uri: any) {
    //this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
   //this.router.navigate([uri]));  
   
   this.router.navigate([uri]);  
  }
}
