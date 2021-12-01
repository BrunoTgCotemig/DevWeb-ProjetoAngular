import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-view-adddata-transition',
  templateUrl: './view-adddata-transition.component.html',
  styleUrls: ['./view-adddata-transition.component.css']
})
export class ViewAdddataTransitionComponent implements OnInit {

  constructor(private router:Router) {}

  ngOnInit(): void {}


  GoTo_adddata():void{

    console.log("GoTo_adddata was called")
    this.router.navigate(["/trnstn/adddata"])

  }

}
