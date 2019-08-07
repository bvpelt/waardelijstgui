import {Component, Input, OnInit} from '@angular/core';
import {Waardelijst} from '../waardelijst';

@Component({
  selector: 'app-waardelijst-detail',
  templateUrl: './waardelijst-detail.component.html',
  styleUrls: ['./waardelijst-detail.component.css']
})
export class WaardelijstDetailComponent implements OnInit {

  @Input() waardelijst: Waardelijst;

  constructor() {
  }

  ngOnInit() {
  }

}
