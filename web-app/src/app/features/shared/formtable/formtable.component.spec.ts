import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtableComponent } from './formtable.component';

describe('FormtableComponent', () => {
  let component: FormtableComponent;
  let fixture: ComponentFixture<FormtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
