import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { InfomaqueteComponent } from './pages/infomaquete/infomaquete.component';
import { CarrouselComponent } from './pages/carrousel/carrousel.component';
import { AboutComponent } from './pages/about/about.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { VideoHeaderComponent } from './pages/video-header/video-header.component';
import { DesenhosComponent } from './pages/desenhos/desenhos.component';
import { ContatoComponent } from './pages/contato/contato.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    VideoHeaderComponent,
    InfomaqueteComponent,
    CarrouselComponent,
    AboutComponent,
    ContatoComponent,
    DesenhosComponent
  ],
  imports: [
    BrowserModule,
    NgxPageScrollModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
