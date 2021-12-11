import { ComponentFixture, TestBed } from '@angular/core/testing';

import { addButtonComponent } from './addButton.component';

describe('addButtonComponent', () => {
  let component: addButtonComponent;
  let fixture: ComponentFixture<addButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ addButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(addButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
