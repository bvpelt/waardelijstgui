import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WaardelijstComponent} from './waardelijst.component';

describe('WaardelijstComponent', () => {
  let component: WaardelijstComponent;
  let fixture: ComponentFixture<WaardelijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WaardelijstComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaardelijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
