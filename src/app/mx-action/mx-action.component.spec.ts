import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MXActionComponent } from './mx-action.component';

describe('MXActionComponent', () => {
  let component: MXActionComponent;
  let fixture: ComponentFixture<MXActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MXActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MXActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
