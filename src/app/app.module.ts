import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieCardDetailsComponent } from './components/movie-card-details/movie-card-details.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    MovieCardDetailsComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HeaderComponent,
    HomeComponent,
    MovieCardComponent,
    HttpClientModule,
    AppRoutingModule,
    ScrollTopComponent,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
