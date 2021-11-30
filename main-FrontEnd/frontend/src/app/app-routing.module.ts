import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewMainComponent } from "./components/PageViews/view-main/view-main.component"
import { ViewAdddataComponent } from "./components/PageViews/view-adddata/view-adddata.component"

const routes: Routes = [
  {
    path: "",
    component: ViewMainComponent,
  
  },
  {
    path:"adddata",
    component: ViewAdddataComponent,
  
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
