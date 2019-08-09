import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WaardelijstDetailComponent} from './waardelijst-detail.component';

describe('WaardelijstDetailComponent', () => {
    let component: WaardelijstDetailComponent;
    let fixture: ComponentFixture<WaardelijstDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WaardelijstDetailComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WaardelijstDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
