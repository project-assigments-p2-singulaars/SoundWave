import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FeelComponent } from './feel/feel.component';
import { JoinComponent } from './join/join.component';
import { DiscoverComponent } from './discover/discover.component';

export const routes: Routes = [
    {
        path: 'feel',
        redirectTo: ''
    },
    {
        path: '',
        component:FeelComponent
    },
    {
        path: 'join',
        component: JoinComponent
    },
    {
        path: 'discover',
        component: DiscoverComponent
    }
    

];
