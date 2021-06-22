import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US, fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import fr from '@angular/common/locales/fr';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { AuthInterceptor } from 'src/app/auth.interceptor';
import { ListItemComponent } from './component/list-item/list-item.component';
import { HeaderTemplateComponent } from './component/header-template/header-template.component';
import { PanneauAdministrationComponent } from './page/panneau-administration/panneau-administration.component';
import { RealisationComponent } from './page/realisation/realisation.component';
import { GammeComponent } from './page/gamme/gamme.component';
import { AtelierComponent } from './page/atelier/atelier.component';
import { MachineListItemComponent } from './component/machine-list-item/machine-list-item.component';
import { PosteDeTravailListItemComponent } from './component/poste-de-travail-list-item/poste-de-travail-list-item.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListItemComponent,
    HeaderTemplateComponent,
    PanneauAdministrationComponent,
    RealisationComponent,
    GammeComponent,
    AtelierComponent,
    MachineListItemComponent,
    PosteDeTravailListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzDropDownModule,
    NzPopoverModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
