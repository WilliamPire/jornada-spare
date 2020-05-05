import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvestidorPageRoutingModule } from './investidor-routing.module';

import { InvestidorPage } from './investidor.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    InvestidorPageRoutingModule
  ],
  declarations: [InvestidorPage]
})
export class InvestidorPageModule {}
