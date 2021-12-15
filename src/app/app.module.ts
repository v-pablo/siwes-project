import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { LecturerComponent } from './component/lecturer/lecturer.component';
import { LecturerHomepageComponent } from './component/lecturer-homepage/lecturer-homepage.component';
import { AttendancePageComponent } from './component/attendance-page/attendance-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SignInComponent,
    LecturerComponent,
    LecturerHomepageComponent,
    AttendancePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
