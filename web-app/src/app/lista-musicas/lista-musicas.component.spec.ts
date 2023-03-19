import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMusicasComponent } from './lista-musicas.component';

describe('ListaMusicasComponent', () => {
  let component: ListaMusicasComponent;
  let fixture: ComponentFixture<ListaMusicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMusicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMusicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
