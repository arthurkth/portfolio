import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridprojectsComponent } from './gridprojects.component';

describe('GridprojectsComponent', () => {
  let component: GridprojectsComponent;
  let fixture: ComponentFixture<GridprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridprojectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
