import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewMainComponent } from "./components/PageViews/view-main/view-main.component"
import { ViewAdddataComponent } from "./components/PageViews/view-adddata/view-adddata.component"
import { ViewAdddataTransitionComponent } from './components/PageViews/view-adddata-transition/view-adddata-transition.component'

const routes: Routes = [
  {
    path: "",
    component: ViewMainComponent,

  },
  {
    path:"trnstn/adddata",
    component: ViewAdddataComponent,

  },
  {
    path:"trnstn",
    component: ViewAdddataTransitionComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
