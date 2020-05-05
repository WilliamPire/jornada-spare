import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FramelessPage } from './frameless.page';

const routes: Routes = [
  {
    path: '',
    component: FramelessPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FramelessPageRoutingModule {}
