import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciantePageRoutingModule } from './iniciante-routing.module';

import { IniciantePage } from './iniciante.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    IniciantePageRoutingModule
  ],
  declarations: [IniciantePage]
})
export class IniciantePageModule {}
