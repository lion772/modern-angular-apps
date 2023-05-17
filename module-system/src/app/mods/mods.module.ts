import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModsHomeComponent } from './mods-home/mods-home.component';
import { SharedModule } from '../shared/shared.module';
import { ModalComponent } from './modal/modal.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionService } from './accordion.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ModsHomeComponent, ModalComponent, AccordionComponent],
  imports: [CommonModule, ModsRoutingModule, SharedModule, HttpClientModule],
  exports: [],
  providers: [AccordionService],
})
export class ModsModule {}
