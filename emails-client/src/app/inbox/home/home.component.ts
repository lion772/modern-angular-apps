import {
  AfterViewInit,
  Component,
  ElementRef,
  Host,
  OnInit,
  ViewChild,
} from '@angular/core';
import { EmailService } from '../email.service';
import { Observable } from 'rxjs';
import { EmailsResponse } from '../email';
//import { EmailCreateComponent } from '../email-create/email-create.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [EmailService],
})
export class HomeComponent implements OnInit, AfterViewInit {
  emailList$!: Observable<EmailsResponse[]>;
  //@ViewChild('emailCreate', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  @ViewChild('title', { static: true }) titleRef!: ElementRef;
  username!: string;

  constructor(@Host() private emailService: EmailService) {}

  ngOnInit(): void {
    this.emailList$ = this.emailService.getEmails();
  }

  ngAfterViewInit(): void {
    //this.loadEmailCreateComponent();
    this.titleRef.nativeElement.innerText = "That's my new title";
  }

  /* loadEmailCreateComponent() {
    const componentRef = this.vcr.createComponent(EmailCreateComponent);
    componentRef.instance.emailsNumber = 10;
  } */

  updateUsername() {
    this.username = 'William Steinke de Mello';
  }
}
