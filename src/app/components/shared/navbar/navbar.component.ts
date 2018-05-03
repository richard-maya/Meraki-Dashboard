import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Http, Headers } from '@angular/http';
// import { ContactoService } from '../../../services/contacto.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

    public profile: any;
    // public usuario:any;

  constructor( public http:Http,
               public auth:AuthService) {
      auth.handleAuthentication();
  }

  ngOnInit() {
      if (this.auth.userProfile) {
          this.profile = this.auth.userProfile;
      } else {
          this.auth.getProfile((err, profile) => {
              this.profile = profile;
          });
      }
  }

  login(){
      this.auth.login();
  }

  logout(){
      this.auth.logout();
  }

}
