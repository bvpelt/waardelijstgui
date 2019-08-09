import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WaardelijstSearchComponent} from './waardelijst-search.component';

describe('WaardelijstSearchComponent', () => {
    let component: WaardelijstSearchComponent;
    let fixture: ComponentFixture<WaardelijstSearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WaardelijstSearchComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WaardelijstSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
