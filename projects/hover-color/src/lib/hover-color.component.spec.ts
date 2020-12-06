import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverColorComponent } from './hover-color.component';

describe('HoverColorComponent', () => {
  let component: HoverColorComponent;
  let fixture: ComponentFixture<HoverColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoverColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
