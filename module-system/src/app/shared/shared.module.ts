import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DividerComponent } from './divider/divider.component';

@NgModule({
  declarations: [DividerComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [DividerComponent],
})
export class SharedModule {}
