import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MtocComponent } from './mtoc/mtoc.component';
import { MXActionComponent } from './mx-action/mx-action.component';



const routes: Routes = [
  { path: '', redirectTo: '/Auth', pathMatch: 'full' },
  { path: 'MX-Action', component: MXActionComponent },
  { path: 'Scanner-Automation', component: MtocComponent },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }