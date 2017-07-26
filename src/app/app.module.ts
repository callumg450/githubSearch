import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { routes } from './navbar/navbar.router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import {GithubService} from './services/github.service';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routes,
    FormsModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
