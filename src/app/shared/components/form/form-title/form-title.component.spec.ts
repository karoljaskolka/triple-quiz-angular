import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FormTitleComponent } from './form-title.component';

@Component({
  template: `<tq-form-title>FORM TITLE</tq-form-title>`,
})
class FormTitleHostComponent {}

describe('FormTitleComponent', () => {
  let component: FormTitleComponent;
  let fixture: ComponentFixture<FormTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormTitleComponent, FormTitleHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create h1 tag', () => {
    const h1 = fixture.debugElement.query(By.css('h1'));

    expect(h1).toBeTruthy();
  });

  it('should render <ng-content> content', () => {
    const hostFixture = TestBed.createComponent(FormTitleHostComponent);

    const host = hostFixture.debugElement.query(
      By.css('[data-testid-form-title]')
    ).nativeElement;

    expect(host.textContent).toEqual('FORM TITLE');
  });
});
