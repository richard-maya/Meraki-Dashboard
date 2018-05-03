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
import { InboxComponent } from './components/inbox/inbox.component';
import { MessageComponent } from './components/message/message.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { IntroComponent } from './components/intro/intro.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    InboxComponent,
    KeysPipe,
    MostrarMensajePipe,
    MessageComponent,
    AnalyticsComponent,
    IntroComponent
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
