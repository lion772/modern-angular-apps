import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DividerComponent } from './divider/divider.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [DividerComponent, TableComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [DividerComponent, TableComponent],
})
export class SharedModule {}
