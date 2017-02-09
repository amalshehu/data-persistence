import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Fire service';
  time;
  itemCount = 0;
  timer;
  msg = ''
  constructor(private service: AppService) {
    this.service.totalItemCount.subscribe(totalItemCount => {
      this.itemCount = totalItemCount;
  });

  }
  start() {
    this.service.timer();
    console.log()
  }
  getItem = () => {
    this.msg = 'PLEASE WAIT...'
    this.timer = setTimeout(() => {
      let itemCount = this.itemCount - 1;
      this.msg = 'ITEM RECIEVED';
      this.service.totalItemCount.next(itemCount);

    }, 9000);

  }
}
