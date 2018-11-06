import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LectuerComponent } from './lectuer.component';

describe('LectuerComponent', () => {
  let component: LectuerComponent;
  let fixture: ComponentFixture<LectuerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectuerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
