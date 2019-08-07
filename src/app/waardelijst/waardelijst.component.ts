import {Component, OnInit} from '@angular/core';
import {Waardelijst} from '../waardelijst';
import {WaardelijstService} from '../waardelijst.service';

@Component({
  selector: 'app-waardelijst',
  templateUrl: './waardelijst.component.html',
  styleUrls: ['./waardelijst.component.css']
})
export class WaardelijstComponent implements OnInit {

  waardelijst: Waardelijst = {id: 1, name: 'kadastralegemeentes'};

  waardelijsten: Waardelijst[];
  selectedWaardelijst: Waardelijst;

  constructor(private waardelijstService: WaardelijstService) {
  }

  ngOnInit() {
    this.getWaardelijsten();
  }

  onSelect(waardelijst: Waardelijst): void {
    this.selectedWaardelijst = waardelijst;
  }

  getWaardelijsten(): void {
    this.waardelijstService.getWaardelijsten().subscribe(waardelijsten => this.waardelijsten = waardelijsten);
  }
}
