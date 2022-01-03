import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmaisonComponent } from './addmaison.component';

describe('AddmaisonComponent', () => {
  let component: AddmaisonComponent;
  let fixture: ComponentFixture<AddmaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmaisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
