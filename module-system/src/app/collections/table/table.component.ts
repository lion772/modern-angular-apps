import { Component, Input } from '@angular/core';
import { Header, User } from 'src/app/collections/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input('class') classNames = '';
  @Input() dataList!: User[];
  @Input() headerslist!: Header[];
}
