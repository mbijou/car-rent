import { Component, OnInit } from "@angular/core";
import {
  NgbDate,
  NgbCalendar,
  NgbDateParserFormatter
} from "@ng-bootstrap/ng-bootstrap";
import { DateRangeService } from "../date-range.service";

@Component({
  selector: "app-date-range-from-popup",
  templateUrl: "./date-range-from-popup.component.html",
  styleUrls: ["./date-range-from-popup.component.css"]
})
export class DateRangeFromPopupComponent implements OnInit {
  constructor(public dateRangeService: DateRangeService) {}

  ngOnInit() {}
}
