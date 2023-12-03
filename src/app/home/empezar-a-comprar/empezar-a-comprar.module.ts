import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpezarAComprarPageRoutingModule } from './empezar-a-comprar-routing.module';

import { EmpezarAComprarPage } from './empezar-a-comprar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpezarAComprarPageRoutingModule
  ],
  declarations: [EmpezarAComprarPage]
})
export class EmpezarAComprarPageModule {}
