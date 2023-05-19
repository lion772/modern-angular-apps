import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  public term = '';

  public onInput(e: any) {
    if (e.target.value) {
      this.term = e.target.value;
    }
  }

  public onSubmitForm(e: any) {
    e.preventDefault();
    console.log(this.term);
  }
}
