import { Component, OnInit } from '@angular/core';
import { DateRangeService } from './date-range.service';

@Component({
  selector: 'app-listing-one',
  templateUrl: './listing-one.component.html',
  styleUrls: ['./listing-one.component.scss']
})
export class ListingOneComponent implements OnInit {

  constructor(public dateRangeService: DateRangeService) { }

  ngOnInit(): void {
  }

}
