import { Component, Input } from "@angular/core";
import {
  NgbDate,
  NgbCalendar,
  NgbDateParserFormatter
} from "@ng-bootstrap/ng-bootstrap";
import { DateRangeService } from "../date-range.service";

@Component({
  selector: "app-date-range-popup",
  templateUrl: "./date-range-popup.component.html",
  styleUrls: ["./date-range-popup.component.css"],
  styles: [
    `
      .form-group.hidden {
        width: 0;
        margin: 0;
        border: none;
        padding: 0;
      }
      .custom-day {
        text-align: center;
        padding: 0.185rem 0.25rem;
        display: inline-block;
        height: 2rem;
        width: 2rem;
      }
      .custom-day.focused {
        background-color: #e6e6e6;
      }
      .custom-day.range,
      .custom-day:hover {
        background-color: rgb(2, 117, 216);
        color: white;
      }
      .custom-day.faded {
        background-color: rgba(2, 117, 216, 0.5);
      }
    `
  ]
})
export class DateRangePopupComponent {
  hoveredDate: NgbDate | null = null;
  datepicker: string;

  @Input() isDatePickerFrom: boolean;
  @Input() pickedDate: NgbDate;

  @Input() dateRangeService: DateRangeService;


  @Input() terminateDateSelection(date: NgbDate, datepicker): boolean {
    return false;
  }
  @Input() dateIsInvalid(date: NgbDate): boolean {
    return false;
  }

  @Input() setDateTo(date: NgbDate, datepicker: any): boolean {
    return null;
  }

  constructor(
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter,
  ) {
  }

  onDateSelection(date: NgbDate, datepicker: any) {
    let terminateDateSelection = this.terminateDateSelection(date, datepicker);

    if (terminateDateSelection) {
      return;
    }

    this.closePopupAfterDateSelection(datepicker);

    if (!this.dateRangeService.fromDate && !this.dateRangeService.toDate) {
      this.dateRangeService.fromDate = date;
    } else if (
      this.dateRangeService.fromDate &&
      !this.dateRangeService.toDate &&
      date &&
      date.after(this.dateRangeService.fromDate)
    ) {
      this.dateRangeService.toDate = date;
    } else {
      this.dateRangeService.toDate = null;
      this.dateRangeService.fromDate = date;
    }
  }

  closePopupAfterDateSelection(datepicker) {
    if (!this.dateRangeService.toDate) {
      datepicker.close();
    }
  }

  isHovered(date: NgbDate) {
    return (
      this.dateRangeService.fromDate &&
      !this.dateRangeService.toDate &&
      this.hoveredDate &&
      date.after(this.dateRangeService.fromDate) &&
      date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return (
      this.dateRangeService.toDate &&
      date.after(this.dateRangeService.fromDate) &&
      date.before(this.dateRangeService.toDate)
    );
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.dateRangeService.fromDate) ||
      (this.dateRangeService.toDate &&
        date.equals(this.dateRangeService.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed))
      ? NgbDate.from(parsed)
      : currentValue;
  }
}
