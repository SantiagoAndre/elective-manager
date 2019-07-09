import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectivaComponent } from './electiva.component';

describe('ElectivaComponent', () => {
  let component: ElectivaComponent;
  let fixture: ComponentFixture<ElectivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
