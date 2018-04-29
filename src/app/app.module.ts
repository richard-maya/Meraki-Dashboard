import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Plug Ins
import { DataTablesModule } from 'angular-datatables';

// Routes
import { APP_ROUTING } from './app.routes';

// Pipes
import { KeysPipe } from './pipes/keys.pipe';
import { MostrarMensajePipe } from './pipes/mostrar-mensaje.pipe';

// Services
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { ContactoService } from './services/contacto.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { PrivateComponent } from './components/private/private.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { MessageComponent } from './components/message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PricingComponent,
    PrivateComponent,
    InboxComponent,
    KeysPipe,
    MostrarMensajePipe,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTablesModule,
    APP_ROUTING
  ],
  providers: [
      AuthService,
      AuthGuardService,
      ContactoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
