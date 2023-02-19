import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  @Input() isLoggedIn: boolean | undefined;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToPage(uri: any){
    this.redirectTo(uri)
  }
  redirectTo(uri: any) {
    //this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
   //this.router.navigate([uri]));  
   
   this.router.navigate([uri]);  
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['login']);  
  }
}
