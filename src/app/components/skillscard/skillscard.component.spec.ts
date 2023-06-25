import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillscardComponent } from './skillscard.component';

describe('SkillscardComponent', () => {
  let component: SkillscardComponent;
  let fixture: ComponentFixture<SkillscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillscardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
