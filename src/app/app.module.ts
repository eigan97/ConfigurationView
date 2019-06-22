import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//rutas
import {APP_ROUTING} from './app.routes';
//componentes
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SettingsmenuComponent } from './settingsmenu/settingsmenu.component';
import { SettingsbodyComponent } from './settingsbody/settingsbody.component';
import { ViewComponent } from './view/view.component';
import { InfoComponent } from './info/info.component';
import { PassComponent } from './pass/pass.component';
import { GroupComponent } from './group/group.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SettingsmenuComponent,
    SettingsbodyComponent,
    ViewComponent,
    InfoComponent,
    PassComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
