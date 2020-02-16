import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngb-modal';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FrontPageComponent} from './front-page/frontPage.component';
import { CardVideoComponent} from './cardVideo/cardVideo.component';
import { CardItemComponent} from './cardVideo/cardItem/cardItem.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrontPageComponent,
    CardVideoComponent,
    CardItemComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
