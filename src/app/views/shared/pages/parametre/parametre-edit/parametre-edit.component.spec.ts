import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametreEditComponent } from './parametre-edit.component';

describe('ParametreEditComponent', () => {
  let component: ParametreEditComponent;
  let fixture: ComponentFixture<ParametreEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametreEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametreEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
