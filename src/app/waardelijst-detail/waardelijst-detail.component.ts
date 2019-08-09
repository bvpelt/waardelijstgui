import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Waardelijst} from '../waardelijst';
import {WaardelijstService} from '../waardelijst.service';

@Component({
    selector: 'app-waardelijst-detail',
    templateUrl: './waardelijst-detail.component.html',
    styleUrls: ['./waardelijst-detail.component.css']
})
export class WaardelijstDetailComponent implements OnInit {

    waardelijst: Waardelijst;

    constructor(private route: ActivatedRoute,
                private waardelijstService: WaardelijstService,
                private location: Location) {
    }

    ngOnInit() {
        this.getWaardelijst();
    }

    getWaardelijst(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.waardelijstService.getWaardelijst(id)
            .subscribe(waardelijst => this.waardelijst = waardelijst);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.waardelijstService.updateWaardelijst(this.waardelijst)
            .subscribe(() => this.goBack());
    }
}
