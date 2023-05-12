import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OthersHomeComponent } from './others-home/others-home.component';

const routes: Routes = [{ path: '', component: OthersHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OthersRoutingModule {}
