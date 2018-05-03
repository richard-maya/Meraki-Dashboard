import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Http, Headers } from '@angular/http';
import { ContactoService } from '../../services/contacto.service';
import { Router, ActivatedRoute } from "@angular/router";
import { Mensaje } from '../../interfaces/mensaje.interface';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styles: []
})
export class MessageComponent implements OnInit {

    public profile: any;
    public mensaje:Mensaje;
    public ancho:number = window.innerWidth;
    public toggleText:boolean;

  constructor( private auth:AuthService,
               private _cS:ContactoService,
               private router:Router,
               private route:ActivatedRoute) {

    route.params.subscribe( parametros=>{
           _cS.verMensaje(parametros['id']).subscribe(data=>{
                this.mensaje = data;
                if(!this.mensaje.visto){
                    _cS.mensajeVisto(parametros['id']).subscribe(data=>this.mensaje.visto = true);
                }
           });
       });

        if(this.ancho >= 960){
            this.toggleText = true;
        } else {
            this.toggleText = false;
        }
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

  onResize() {
      this.ancho = window.innerWidth;

      if(this.ancho >= 960){
          this.toggleText = true;
      } else {
          this.toggleText = false;
      }
  }

}
