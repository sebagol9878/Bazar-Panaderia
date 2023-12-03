import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpezarAComprarPage } from './empezar-a-comprar.page';

const routes: Routes = [
  {
    path: '',
    component: EmpezarAComprarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpezarAComprarPageRoutingModule {}
