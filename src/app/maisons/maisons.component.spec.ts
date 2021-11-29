import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonsComponent } from './maisons.component';

describe('MaisonsComponent', () => {
  let component: MaisonsComponent;
  let fixture: ComponentFixture<MaisonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaisonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
