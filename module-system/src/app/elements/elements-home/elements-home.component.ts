import { Component } from '@angular/core';

@Component({
  selector: 'app-elements-home',
  templateUrl: './elements-home.component.html',
  styleUrls: ['./elements-home.component.css'],
})
export class ElementsHomeComponent {
  public title = 'Element Component';
  public shouldDisplayHeader = true;
  public linesToShow = 3;
}
