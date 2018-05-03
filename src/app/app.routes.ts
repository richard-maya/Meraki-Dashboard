import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { MessageComponent } from './components/message/message.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { IntroComponent } from './components/intro/intro.component';
import { AuthGuardService } from './services/auth-guard.service';

const APP_ROUTES: Routes = [
  { path: '', component: IntroComponent },
  { path: 'Intro', component: IntroComponent },
  {
      path: 'Home',
      component: HomeComponent,
      canActivate: [ AuthGuardService ]
  },
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
  {
      path: 'Analytics',
      component: AnalyticsComponent,
      canActivate: [ AuthGuardService ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'Intro' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
