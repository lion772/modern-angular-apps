import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmailFormComponent } from './email-form/email-form.component';
import { SharedModule } from '../shared/shared.module';

describe('EmailFormComponent', () => {
  let component: EmailFormComponent;
  let fixture: ComponentFixture<EmailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailFormComponent ],
      imports: [ SharedModule ],
      providers: [FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should pre-populate the form with values from the email input', () => {
    const testEmail = { from: 'test@example.com', to: '', subject: '', text: '', html: '' };
    component.email = testEmail;
    fixture.detectChanges();
  
    expect(component.emailForm.get('from')?.value).toEqual(testEmail.from);
  });

  it('should create a form group with controls for email fields', () => {
    expect(component.emailForm instanceof FormGroup).toBeTrue();
    expect(component.emailForm.contains('to')).toBeTrue();
    expect(component.emailForm.contains('from')).toBeTrue();
    expect(component.emailForm.contains('subject')).toBeTrue();
    expect(component.emailForm.contains('text')).toBeTrue();
  });

  
  it('should validate the form on valid email', () => {
    const emailControl = component.emailForm.get('email');
    emailControl?.setValue('test@example.com');
    expect(component.emailForm.valid).toBeTrue();
  });

  it('should invalidate the form on empty email', () => {
    const emailControl = component.emailForm.get('email');
    emailControl?.setValue('');
    expect(component.emailForm.invalid).toBeTrue();
    expect(component.emailForm.get('email')?.errors).toEqual({ required: true });
  });
  
  it('should be invalid on empty form', () => {
    expect(component.emailForm.invalid).toBeTrue();
  });
  
  it('should be valid on filled required fields', () => {
    component.emailForm.get('to')?.setValue('recipient@example.com');
    component.emailForm.get('subject')?.setValue('Test Subject');
    component.emailForm.get('text')?.setValue('This is a test email.');
    expect(component.emailForm.valid).toBeTrue();
  });

});
