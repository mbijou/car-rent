import {Component, Input, OnInit} from '@angular/core';
import {
  NgbDate,
  NgbCalendar,
  NgbDateParserFormatter
} from "@ng-bootstrap/ng-bootstrap";
import { DateRangeService } from "../date-range.service";

@Component({
  selector: "app-date-range-to-popup",
  templateUrl: "./date-range-to-popup.component.html",
  styleUrls: ["./date-range-to-popup.component.css"]
})
export class DateRangeToPopupComponent implements OnInit {
  @Input() dateRangeService: DateRangeService;
  @Input() label: string;

  constructor() {}

  onDateSelection(date: NgbDate, datepicker: any) {}

  terminateDateSelection(date: NgbDate, datepicker: any) {
    let invalidDate = this.dateIsInvalid(date);

    if (invalidDate) {
      return true;
    }

    let dateToIsSet = this.setDateTo(date, datepicker);

    if (dateToIsSet) {
      return true;
    }
  }

  setDateTo(date: NgbDate, datepicker: any): boolean {
    if (this.dateRangeService.fromDate && this.dateRangeService.toDate) {
      this.dateRangeService.toDate = date;
      datepicker.close();
      return true;
    }
    return null;
  }

  dateIsInvalid(date: NgbDate): boolean {
    if (date && this.dateRangeService.fromDate) {
      if (date.year < this.dateRangeService.fromDate.year) {
        return true;
      } else if (
        date.month < this.dateRangeService.fromDate.month &&
        date.year == this.dateRangeService.fromDate.year
      ) {
        return true;
      } else if (
        date.day < this.dateRangeService.fromDate.day &&
        date.month == this.dateRangeService.fromDate.month
      ) {
        return true;
      }
    }

    return null;
  }

  ngOnInit() {}
}
