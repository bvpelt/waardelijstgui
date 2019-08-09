import {Component, OnInit} from '@angular/core';

import {Waardelijst} from '../waardelijst';
import {WaardelijstService} from '../waardelijst.service';

@Component({
    selector: 'app-waardelijst',
    templateUrl: './waardelijst.component.html',
    styleUrls: ['./waardelijst.component.css']
})
export class WaardelijstComponent implements OnInit {

    waardelijsten: Waardelijst[];

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
}
