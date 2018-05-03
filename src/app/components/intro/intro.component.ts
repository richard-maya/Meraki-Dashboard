import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthService } from '../../services/auth.service';
// import { ContactoService } from '../../services/contacto.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styles: []
})
export class IntroComponent implements OnInit {

    profile: any;

    constructor(public http:Http,
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
