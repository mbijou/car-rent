import { Component, OnInit, Input } from "@angular/core";

import { DateRangeService } from "../date-range.service";

@Component({
  selector: "app-date-range-from-popup",
  templateUrl: "./date-range-from-popup.component.html",
  styleUrls: ["./date-range-from-popup.component.css"]
})
export class DateRangeFromPopupComponent implements OnInit {
  @Input() dateRangeService: DateRangeService;
  @Input() label: string;

  constructor() {}

  ngOnInit() {}
}
