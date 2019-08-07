import {Injectable} from '@angular/core';
import {Waardelijst} from './waardelijst';
import {WAARDELIJSTEN} from './mock-waardelijsten';
import {Observable, of} from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class WaardelijstService {

  constructor(private messageService: MessageService) {
  }

  getWaardelijsten(): Observable<Waardelijst[]> {
    this.messageService.add('WaardelijstService: fetched waardelijsten');
    return of(WAARDELIJSTEN);
  }

}
