import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar"

@Injectable({
  providedIn: 'root'
})
export class SManageDataService {
  constructor(private SnackBar: MatSnackBar) {}


  GenerateMessage(msg: string, isError:boolean=false):void {

      this.SnackBar.open(msg, "X", {

        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: isError ? ["msg-error"] : ["msg-success"]



      });

  }


}
