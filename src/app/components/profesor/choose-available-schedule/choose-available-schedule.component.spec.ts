import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseAvailableScheduleComponent } from './choose-available-schedule.component';

describe('ChooseAvailableScheduleComponent', () => {
  let component: ChooseAvailableScheduleComponent;
  let fixture: ComponentFixture<ChooseAvailableScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseAvailableScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseAvailableScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
