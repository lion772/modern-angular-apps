import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
})
export class PlaceholderComponent implements OnInit {
  @Input() public shouldDisplayHeader!: boolean;
  @Input() public linesNumber!: number;

  public constructor() {}

  public ngOnInit(): void {}
}
