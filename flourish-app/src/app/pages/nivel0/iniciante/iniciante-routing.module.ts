import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciantePage } from './iniciante.page';

const routes: Routes = [
  {
    path: '',
    component: IniciantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciantePageRoutingModule {}
