import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model :any = {};
  welComeMessage : string ="";

  constructor(public authService : AuthService, private alertify :AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model)
    .subscribe(next => {
      this.alertify.success('Logged in successfully');
      this.welComeMessage = 'Welcome ' + this.authService.decodedToken['unique_name'];
    }, 
    error =>{
      this.alertify.error('Failed to Login');
    }, () =>{
      this.router.navigate(['/members']);
    });

  }

  loggedIn(){
    return this.authService.loggedIn();
  }

  logout(){
    localStorage.removeItem('token');
    this.welComeMessage = "";
    this.alertify.message("Logged Out");
    this.router.navigate(['/home'])
  }

}
