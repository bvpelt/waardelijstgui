import {Component, OnInit} from '@angular/core';

import {Waardelijst} from '../model/waardelijst';
import {WaardelijstService} from '../service/waardelijst.service';

@Component({
    selector: 'app-waardelijst',
    templateUrl: './waardelijst.component.html',
    styleUrls: ['./waardelijst.component.css']
})
export class WaardelijstComponent implements OnInit {

    waardelijsten: Waardelijst[];
    selectedWaardelijst: Waardelijst;

    constructor(private waardelijstService: WaardelijstService) {
    }

    ngOnInit() {
        this.getWaardelijsten();
    }

    getWaardelijsten(): void {
        this.waardelijstService.getWaardelijsten().subscribe(waardelijsten => this.waardelijsten = waardelijsten);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) {
            return;
        }
        this.waardelijstService.addWaardelijst({name} as Waardelijst)
            .subscribe(waardelijst => {
                this.waardelijsten.push(waardelijst);
            });
    }

    delete(waardelijst: Waardelijst): void {
        this.waardelijsten = this.waardelijsten.filter(h => h !== waardelijst);
        this.waardelijstService.deleteWaardelijst(waardelijst).subscribe();
    }

    onSelect(waardelijst: Waardelijst) {
            this.selectedWaardelijst = waardelijst;
            this.waardelijstService.log("selected waardelijst: " + waardelijst.name);
        }

}
