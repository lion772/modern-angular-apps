import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { WikipediaService } from '../../wikipedia.service';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [SearchBarComponent],
  providers: [],
})
export class SearchBarModule {}
