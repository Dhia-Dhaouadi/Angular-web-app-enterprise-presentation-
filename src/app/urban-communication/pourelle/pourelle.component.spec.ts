import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PourelleComponent } from './pourelle.component';

describe('PourelleComponent', () => {
  let component: PourelleComponent;
  let fixture: ComponentFixture<PourelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PourelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PourelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
