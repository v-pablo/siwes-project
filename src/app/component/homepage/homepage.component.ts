import { Component, OnInit } from '@angular/core';
import { SignInComponent } from '../sign-in/sign-in.component';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  

  

  constructor() { 
    const signIn= ()=>{
    console.log("")
    }
  }

  ngOnInit(): void {
  }

}
