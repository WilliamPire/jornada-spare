import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PontuacaoPageRoutingModule } from './pontuacao-routing.module';

import { PontuacaoPage } from './pontuacao.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PontuacaoPageRoutingModule
  ],
  declarations: [PontuacaoPage]
})
export class PontuacaoPageModule {}
