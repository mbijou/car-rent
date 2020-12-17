import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DateRangePopupComponent } from "./date-range-popup/date-range-popup.component";
import { DateRangeToPopupComponent } from "./date-range-to-popup/date-range-to-popup.component";
import { DateRangeFromPopupComponent } from "./date-range-from-popup/date-range-from-popup.component";
import { DateRangeService } from "./date-range.service";

@NgModule({
  imports: [BrowserModule, NgbModule, FormsModule],
  declarations: [
    DateRangePopupComponent,
    DateRangeToPopupComponent,
    DateRangeFromPopupComponent
  ],
  exports: [
    DateRangePopupComponent,
    DateRangeFromPopupComponent,
    DateRangeToPopupComponent
  ],
  bootstrap: [
    DateRangePopupComponent,
    DateRangeFromPopupComponent,
    DateRangeToPopupComponent
  ],
  providers: [DateRangeService]
})
export class DatepickerModule {}
