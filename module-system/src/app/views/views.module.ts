import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ManageViewsService } from './manage-views.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ViewsHomeComponent, StatisticsComponent],
  imports: [CommonModule, ViewsRoutingModule, HttpClientModule, SharedModule],
  exports: [],
  providers: [ManageViewsService],
})
export class ViewsModule {}
