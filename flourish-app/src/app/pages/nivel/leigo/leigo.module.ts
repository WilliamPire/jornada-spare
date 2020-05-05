import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeigoPageRoutingModule } from './leigo-routing.module';

import { LeigoPage } from './leigo.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    LeigoPageRoutingModule
  ],
  declarations: [LeigoPage]
})
export class LeigoPageModule {}
