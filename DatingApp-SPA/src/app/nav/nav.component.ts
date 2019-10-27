import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model :any = {};
  welComeMessage : string ="";

  constructor(public authService : AuthService, private alertify :AlertifyService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model)
    .subscribe(next => {
      this.alertify.success('Logged in successfully');
      this.welComeMessage = this.authService.decodedToken['unique_name'];
    }, 
    error =>{
      this.alertify.error('Failed to Login');
    });

  }

  loggedIn(){
    return this.authService.loggedIn();
  }

  logout(){
    localStorage.removeItem('Token');
    this.welComeMessage = "";
    this.alertify.message("Logged Out");
  }

}
