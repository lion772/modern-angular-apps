import { Component } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.css'],
})
export class SegmentComponent {
  public shouldDisableDocumentButton = false;

  public onAddDocument(e: Event) {
    e.preventDefault();
  }
}
