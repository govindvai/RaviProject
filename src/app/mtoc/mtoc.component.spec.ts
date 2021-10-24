import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtocComponent } from './mtoc.component';

describe('RegisterComponent', () => {
  let component: MtocComponent;
  let fixture: ComponentFixture<MtocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
