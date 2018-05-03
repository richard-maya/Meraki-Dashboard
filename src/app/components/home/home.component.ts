import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { AuthService } from '../../services/auth.service';
import { ContactoService } from '../../services/contacto.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

    profile: any;

    constructor(public http:Http,
                public auth:AuthService,
                public _cS:ContactoService) {
      }

      ngOnInit() {
          if (this.auth.userProfile) {
              this.profile = this.auth.userProfile;
              // console.log(this.profile);
          } else {
              this.auth.getProfile((err, profile) => {
                  this.profile = profile;
                  // console.log(this.profile);
              });
          }
      }

}
