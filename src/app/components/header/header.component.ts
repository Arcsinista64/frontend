import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService : NgbModal) { }

  ngOnInit() {
    
  }
  title = 'GoSafe';


  login()
  {
    const modal = this.modalService.open(LoginComponent);
  }
  
  signup()
  {
    const modal = this.modalService.open(SignUpComponent);
  }

  navbarOpen = false; 

  toggleNavbar () { 
    this.navbarOpen =! this.navbarOpen; 
  }
}
