import { Injectable } from '@angular/core';
import { CanDeactivate, Router } from '@angular/router';
import { EmailFormComponent } from './email-form/email-form.component';

@Injectable({
  providedIn: 'root',
})
export class InboxGuard implements CanDeactivate<EmailFormComponent> {

  canDeactivate(component: EmailFormComponent): boolean {
    console.log("true!!")
    return component.emailForm.pristine;
  }
}
