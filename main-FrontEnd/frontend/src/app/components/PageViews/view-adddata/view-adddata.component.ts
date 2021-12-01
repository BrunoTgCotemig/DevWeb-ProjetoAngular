import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { SManageDataService } from "../../../Services_and_Related/s-manage-data.service"



@Component({
  selector: 'app-view-adddata',
  templateUrl: './view-adddata.component.html',
  styleUrls: ['./view-adddata.component.css']
})
export class ViewAdddataComponent implements OnInit {
  constructor(private smanageservice: SManageDataService, private router:Router) {}



  ngOnInit(): void {

    
  }


  DB_adddata(){
    
    this.smanageservice.GenerateMessage("Registro completo!")
  }


  GoTo_trnstn():void{   this.router.navigate(["/trnstn"])   }



}
