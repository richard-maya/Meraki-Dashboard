import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

        profile: any;

      constructor( public http:Http, private auth:AuthService ) { }

      ngOnInit() {
          if (this.auth.userProfile) {
              this.profile = this.auth.userProfile;
          } else {
              this.auth.getProfile((err, profile) => {
                  this.profile = profile;
              });
          }
      }

}
