import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Mensaje } from '../interfaces/mensaje.interface';
import { AuthService } from '../services/auth.service';
import 'rxjs/Rx';

@Injectable()
export class ContactoService {

    profile: any;

  constructor( public http:Http, public auth:AuthService ) {
      if (this.auth.userProfile) {
          this.profile = this.auth.userProfile;
      } else {
          this.auth.getProfile((err, profile) => {
              this.profile = profile;
          });
      }
  }

  contactoURL:string = `https://nuclear-forms.firebaseio.com/${this.auth.userProfile.nickname}.json`;
  mensajeURL:string = `https://nuclear-forms.firebaseio.com/${this.auth.userProfile.nickname}/`;

  // usuario:any[] = this.auth.userProfile.name.split("@");
  // contactoURL:string = `https://nuclear-forms.firebaseio.com/${this.usuario[0]}.json`;
  // mensajeURL:string = `https://nuclear-forms.firebaseio.com/${this.usuario[0]}/`;

  // nuevoMensaje(mensaje:Mensaje){
  //     let body = JSON.stringify(mensaje);
  //     let headers = new Headers({
  //         'Content-Type':'application/json'
  //     });
  //     return this.http.post(this.contactoURL, body, {headers}).map(res=>{
  //         // console.log(res.json());
  //         return res.json();
  //     });
  // }

  mensajeVisto(key$:string){
      let url = `${this.mensajeURL}/${key$}/visto.json`;

      return this.http.put(url, 'true').map(res=>{
          return res.json();
      });
  }

  obtenerMensajes( ){
      return this.http.get(this.contactoURL).map(res=>res.json());
  }

  verMensaje( key$:string ){
      let url = `${this.mensajeURL}/${key$}.json`;
      return this.http.get(url).map(res=>res.json());
  }

  borrarMensaje( key$:string ){
      let url = `${this.mensajeURL}/${key$}.json`;
      return this.http.delete(url).map(res=>res.json());
  }

}
