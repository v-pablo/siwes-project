import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LecturerComponent } from './component/lecturer/lecturer.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { LecturerHomepageComponent } from './component/lecturer-homepage/lecturer-homepage.component';

const routes: Routes = [
  { path: '', redirectTo:"homepage", pathMatch:"full"},
  {path:'homepage', component:HomepageComponent},
  {path:'sign-in', component:SignInComponent},
  {path:'lecturer', component: LecturerComponent},
  {path: 'lecturerHomepage', component: LecturerHomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
