import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MtocComponent } from './mtoc/mtoc.component';



const routes: Routes = [
  { path: '', redirectTo: '/Auth', pathMatch: 'full' },
  { path: 'MX-Action', component: MtocComponent },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }