import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SettingsmenuComponent } from './settingsmenu/settingsmenu.component';
import { SettingsbodyComponent } from './settingsbody/settingsbody.component';
import { ViewComponent } from './view/view.component';
import { InfoComponent } from './info/info.component';
import { PassComponent } from './pass/pass.component';
import { GroupComponent } from './group/group.component';


export const APP_ROUTES:Routes=[
    
    {path:'settings',component:ViewComponent, children:[
        {path:'info',component:InfoComponent},
        {path:'pass',component:PassComponent},
        {path:'tareas',component:GroupComponent}
    ]},
    {path:'',pathMatch:'full',redirectTo:'settings/info'}/* ,
    {path:'**',pathMatch:'full',redirectTo:'settings/info'} */
];

export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);

