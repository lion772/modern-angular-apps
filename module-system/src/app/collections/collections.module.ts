import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';
import { ReusableTabsComponent } from './reusable-tabs/reusable-tabs.component';

@NgModule({
  declarations: [
    CollectionsHomeComponent,
    TableComponent,
    TabsComponent,
    BiographyComponent,
    CompaniesComponent,
    PartnersComponent,
    ReusableTabsComponent,
  ],
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
