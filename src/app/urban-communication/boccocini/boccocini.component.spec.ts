import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoccociniComponent } from './boccocini.component';

describe('BoccociniComponent', () => {
  let component: BoccociniComponent;
  let fixture: ComponentFixture<BoccociniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoccociniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoccociniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
