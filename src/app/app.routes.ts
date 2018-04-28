import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { PricingComponent } from './components/pricing/pricing.component';
// import { PrivateComponent } from './components/private/private.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { MessageComponent } from './components/message/message.component';
import { AuthGuardService } from './services/auth-guard.service';

const APP_ROUTES: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: '', component: HomeComponent },
  // { path: 'Pricing', component: PricingComponent },
  // {
  //     path: 'Private',
  //     component: PrivateComponent,
  //     canActivate: [ AuthGuardService ]
  // },
  {
      path: 'Inbox',
      component: InboxComponent,
      canActivate: [ AuthGuardService ]
  },
  {
      path: 'Message/:id',
      component: MessageComponent,
      canActivate: [ AuthGuardService ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'Home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
