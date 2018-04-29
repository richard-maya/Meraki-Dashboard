import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { AuthService } from '../../services/auth.service';
import { ContactoService } from '../../services/contacto.service';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styles: []
})
export class InboxComponent implements OnInit {

    profile: any;
    mensajes:any[] = [];
    dtTrigger: Subject<any> = new Subject();
    dtOptions: DataTables.Settings = {};

  constructor(public http:Http,
              public auth:AuthService,
              public _cS:ContactoService) {
                  this._cS.obtenerMensajes().subscribe(data=>{
                this.mensajes = data;
                this.dtTrigger.next();

          for( let key$ in data){
              let m = data[key$];
              m.key$ = key$;
          }
      });
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

      this.dtOptions = {
          order: [[0,"desc"]]
        };
  }

  borrarMensaje( key$:string ){
      this._cS.borrarMensaje(key$).subscribe(respuesta=>{
          if(respuesta){
              console.error(respuesta);
          }else{
              delete this.mensajes[key$];
          }
      })
  }

}
