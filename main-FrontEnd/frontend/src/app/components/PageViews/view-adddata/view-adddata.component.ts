import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { SManageDataService } from "../../../Services_and_Related/s-manage-data.service"

import { User } from "../../../Services_and_Related/Models/DM_User"


@Component({
  selector: 'app-view-adddata',
  templateUrl: './view-adddata.component.html',
  styleUrls: ['./view-adddata.component.css']
})
export class ViewAdddataComponent implements OnInit {
  constructor(private smanageservice: SManageDataService, private router:Router) {}


  
  dummyData: User = {
    Name: "Adalberto",
    Age: 19,
    Gender: 'Masculino',
    Email: 'a@a.gmail.com',
    PhoneNumber: '1233322',
    CountryOfOrigin: 'Albania',
    CityOfOrigin: 'Tottaly not an Albanian city'
  }


  ngOnInit(): void {


    
    
  }


  DB_adddata():void{

    this.smanageservice.GenerateMessage("adddata was pressed");


    this.smanageservice.AddData(this.dummyData).subscribe(() => {
      this.smanageservice.GenerateMessage("Registro completo!");
      this.router.navigate(["/trnstn"]);
    });

    
  }


  GoTo_trnstn():void{   this.router.navigate(["/trnstn"])   }



}
