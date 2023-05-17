import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Accordion, AccordionService } from '../accordion.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {
  public currentIndex = 0;
  public accordionData = inject(AccordionService);
  public accordionList$: Observable<Accordion[]> =
    this.accordionData.getAccordionData();

  public onClick(index: number): void {
    if (this.currentIndex === index) {
      this.currentIndex = -1;
      return;
    }
    this.currentIndex = index;
  }
}
