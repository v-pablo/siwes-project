import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecturer-homepage',
  templateUrl: './lecturer-homepage.component.html',
  styleUrls: ['./lecturer-homepage.component.css']
})
export class LecturerHomepageComponent implements OnInit {

  icon:boolean=false;
  modal:boolean=true;
   iconFunction(){
     this.icon=true;
     this.modal=false;
    
 }

modalFunction(){
     this.modal=true;
     this.icon=false;
    
 }

  constructor() { }

  ngOnInit(): void {
  }

}
