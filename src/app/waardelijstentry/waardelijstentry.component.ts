import { Component, OnInit, Input } from '@angular/core';
import {WaardelijstEntry} from '../model/waardelijstentry';
import {WaardelijstService} from '../service/waardelijst.service';
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

  constructor(private waardelijstentriesService: WaardelijstentriesService) { }

  ngOnInit() {
    this.getWaardelijstentries();
  }

  getWaardelijstentries(): void {
    this.waardelijstentriesService.log('WaardelijstentryComponent: get waardenlijsten voor: ' + this.waardelijst.name);
    this.waardelijstentriesService.getWaardelijstentries(this.waardelijst).subscribe(waardelijstentries => this.waardelijstentries = waardelijstentries);
  }
}
