import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

@NgModule({
  declarations: [CollectionsHomeComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  exports: [],
  providers: [DataService],
})
export class CollectionsModule {}
