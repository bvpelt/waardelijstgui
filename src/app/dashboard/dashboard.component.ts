import {Component, OnInit} from '@angular/core';
import {Waardelijst} from '../waardelijst';
import {WaardelijstService} from '../waardelijst.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    waardelijsten: Waardelijst[] = [];

    constructor(private waardelijstService: WaardelijstService) {
    }

    ngOnInit() {
        this.getWaardelijsten();
    }

    getWaardelijsten(): void {
        this.waardelijstService.getWaardelijsten()
            .subscribe(waardelijsten => this.waardelijsten = waardelijsten.slice(1, 5));
    }
}
