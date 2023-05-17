import { Component, ElementRef, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent {
  public showModal = true;

  public onCloseModal(showModal: boolean): void {
    this.showModal = showModal;
  }
}
