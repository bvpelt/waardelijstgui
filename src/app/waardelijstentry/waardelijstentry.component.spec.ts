import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaardelijstentryComponent } from './waardelijstentry.component';

describe('WaardelijstentryComponent', () => {
  let component: WaardelijstentryComponent;
  let fixture: ComponentFixture<WaardelijstentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaardelijstentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaardelijstentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
