import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isQuickLoginShown = false;
  title = 'my-app';
  currentDate: Date = new Date();
  showQuickLogin(show: boolean) {
    this.isQuickLoginShown = show;
  }

  ngOnInit() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }
}
