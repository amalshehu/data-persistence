import { Injectable, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class AppService implements OnInit {
  ticks = 0;

  ngOnInit() {
    let timer = Observable.timer(2000, 1000);
    timer.subscribe(t => {
      this.ticks = t;
      console.log(this.ticks);
    });
  }
}
