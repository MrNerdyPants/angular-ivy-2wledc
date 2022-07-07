import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  timeOffset = new Date().getTimezoneOffset() / -60;
  gmt = this.timeOffset >= 0 ? '+0' + this.timeOffset : '-0' + this.timeOffset;

  digits_count(n) {
    var count = 0;
    n = Math.abs(n);
    if (n >= 1) ++count;

    while (n / 10 >= 1) {
      n /= 10;
      ++count;
    }

    return count;
  }

  getGMT() {
    let gmtFigure = new Date().getTimezoneOffset() / -60;
    let gmtSign = gmtFigure >= 0 ? '+' : '-';
    let gmtlength = this.digits_count(gmtFigure);
    let gmt = 'GMT';
    if (gmtlength == 1) {
      gmt += gmtSign + '0' + Math.abs(gmtFigure);
    } else if (gmtlength > 1) {
      gmt += gmtSign + Math.abs(gmtFigure);
    }
    return gmt;
  }
}
