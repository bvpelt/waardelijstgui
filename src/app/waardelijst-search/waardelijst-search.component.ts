import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {Waardelijst} from '../model/waardelijst';
import {WaardelijstService} from '../service/waardelijst.service';

@Component({
    selector: 'app-waardelijst-search',
    templateUrl: './waardelijst-search.component.html',
    styleUrls: ['./waardelijst-search.component.css']
})
export class WaardelijstSearchComponent implements OnInit {
    waardelijsten$: Observable<Waardelijst[]>;
    private searchTerms = new Subject<string>();

    constructor(private waardelijstService: WaardelijstService) {
    }

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.waardelijsten$ = this.searchTerms
            .pipe(
                // wait 300ms after each keystroke before considering the term
                debounceTime(300),

                // ignore new term if same as previous term
                distinctUntilChanged(),

                // switch to new search observable each time the term changes
                switchMap((term: string) => this.waardelijstService.searchWaardelijst(term)),
            );

    }

}
