import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from '../../services/auth.service';
import { ContactoService } from '../../services/contacto.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styles: []
})
export class InboxComponent implements OnInit {

    profile: any;
    mensajes:any[] = [];
    dominio: any;
    cantidadMensajes: any;

  constructor(public http:Http,
              private auth:AuthService,
              private _contactoService:ContactoService) {
                  this._contactoService.obtenerMensajes().subscribe(data=>{
                this.mensajes = data;

          for( let key$ in data){
              let m = data[key$];
              m.key$ = key$;
          }
      });
      //
      // this._contactoService.obtenerDominio().subscribe(data=>{
      //     this.dominio = data;
      // })
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

  borrarMensaje( key$:string ){
      this._contactoService.borrarMensaje(key$).subscribe(respuesta=>{
          if(respuesta){
              console.error(respuesta);
          }else{
              delete this.mensajes[key$];
          }
      })
  }

}
