import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeigoPage } from './leigo.page';

const routes: Routes = [
  {
    path: '',
    component: LeigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeigoPageRoutingModule {}
