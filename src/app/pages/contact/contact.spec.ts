import { TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact';

describe('ContactComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ContactComponent] }).compileComponents();
  });

  it('should reject incomplete contact details', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const component = fixture.componentInstance;

    component.formData.email = 'not-an-email';
    component.formData.message = 'Hi';
    component.emailTouched = true;
    component.messageTouched = true;

    expect(component.isFormValid).toBeFalse();
    expect(component.showEmailError).toBeTrue();
    expect(component.showMessageError).toBeTrue();
  });

  it('should expose a valid, sendable state', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const component = fixture.componentInstance;

    component.formData.email = 'visitor@example.com';
    component.formData.message = 'I would like to discuss a project.';

    expect(component.isEmailValid).toBeTrue();
    expect(component.isMessageValid).toBeTrue();
    expect(component.isFormValid).toBeTrue();
  });

  it('should transition from sending to success and clear the form', async () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const component = fixture.componentInstance;
    const response = {
      ok: true,
      json: async () => ({ success: true }),
    } as Response;
    spyOn(window, 'fetch').and.resolveTo(response);

    component.formData = {
      name: 'Portfolio test',
      email: 'visitor@example.com',
      message: 'A valid test message.',
    };

    const request = component.onSubmit();
    expect(component.state).toBe('sending');
    await request;

    expect(component.state).toBe('success');
    expect(component.formData).toEqual({ name: '', email: '', message: '' });
  });
});
