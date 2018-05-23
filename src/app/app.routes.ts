import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ConversaComponent} from './conversa/conversa.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'conversa', component: ConversaComponent},
  {path: 'about', component: AboutComponent},

];
