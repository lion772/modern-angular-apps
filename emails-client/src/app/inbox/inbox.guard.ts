import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EmailFormComponent } from './email-form/email-form.component';

@Injectable({
  providedIn: 'root',
})
export class InboxGuard implements CanDeactivate<EmailFormComponent> {

  canDeactivate(component: EmailFormComponent): boolean {
    console.log(component);
    return true;
    /* return component.emailForm.pristine; */
  }
}
