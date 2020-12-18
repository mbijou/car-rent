import { Component} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {DateRangeService} from './date-range.service';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.scss']}
  )

export class MainSearchComponent {
  constructor(public dateRangeService: DateRangeService) {}

}


