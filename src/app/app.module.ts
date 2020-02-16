import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngb-modal';
import { MDBBootstrapModule} from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FrontPageComponent} from './front-page/frontPage.component';
import { MainLayoutComponent} from './main-layout/mainLayout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrontPageComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ModalModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
