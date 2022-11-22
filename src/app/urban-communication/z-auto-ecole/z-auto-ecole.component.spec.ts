import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZAutoEcoleComponent } from './z-auto-ecole.component';

describe('ZAutoEcoleComponent', () => {
  let component: ZAutoEcoleComponent;
  let fixture: ComponentFixture<ZAutoEcoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZAutoEcoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZAutoEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
