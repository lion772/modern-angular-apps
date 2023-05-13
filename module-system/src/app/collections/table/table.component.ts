import { Component, Input } from '@angular/core';
import { User } from 'src/app/collections/data.service';

interface Headers {
  key: string;
  label: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() dataList!: User[];
  @Input() headerslist = [];
}
