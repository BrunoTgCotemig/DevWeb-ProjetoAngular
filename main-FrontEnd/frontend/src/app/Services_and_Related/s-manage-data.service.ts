import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar"

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from "./Models/DM_User" 

@Injectable({
  providedIn: 'root'
})
export class SManageDataService {
  baseUrl = "http://localhost:3001/Signed_People"
  constructor(private SnackBar: MatSnackBar, private http: HttpClient) {}
  





  GenerateMessage(msg: string, isError:boolean=false):void {

      this.SnackBar.open(msg, "X", {

        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: isError ? ["msg-error"] : ["msg-success"]



      });

  }


  AddData(user:User) : Observable<User>{

    return this.http.post<User>(this.baseUrl, user)
  }


}
