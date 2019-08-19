import {Component, Input, OnInit} from '@angular/core';
import {WaardelijstEntry} from '../model/waardelijstentry';
import {WaardelijstentriesService} from '../service/waardelijstentries.service';
import {Waardelijst} from '../model/waardelijst';

@Component({
    selector: 'app-waardelijstentry',
    templateUrl: './waardelijstentry.component.html',
    styleUrls: ['./waardelijstentry.component.css']
})
export class WaardelijstentryComponent implements OnInit {

    @Input() waardelijst: Waardelijst;      // From waardelijst
    waardelijstentries: WaardelijstEntry[];

    constructor(private waardelijstentriesService: WaardelijstentriesService) {
    }

    ngOnInit() {
        this.getWaardelijstentries();
    }

    getWaardelijstentries(): void {
        this.waardelijstentriesService.log('WaardelijstentryComponent: get waardenlijsten voor: ' + this.waardelijst.name);
        this.waardelijstentriesService.getWaardelijstentries(this.waardelijst).subscribe(waardelijstentries => this.waardelijstentries = waardelijstentries);
    }

    public formatDate(date): string {
        var outdate = '';

        if (date != null) {
            outdate = date.year + '-';
            if (date.monthValue < 10) {
              outdate += '0';
            }
            outdate += date.monthValue + '-';
            if (date.dayOfMonth < 10) {
              outdate += '0';
            }
            outdate += date.dayOfMonth;
        }
        return outdate;
    }
}
