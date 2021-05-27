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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    InfomaqueteComponent,
    CarrouselComponent,
    AboutComponent
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
