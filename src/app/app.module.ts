import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { LecturerComponent } from './component/lecturer/lecturer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SignInComponent,
    LecturerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
