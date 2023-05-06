import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../../data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() data!: Data;

  public ngOnInit(): void {
    if (!this.data) {
      this.data = { id: '1', name: 'test', description: 'some description' };
    }
  }
}
