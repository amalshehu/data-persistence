import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {BehaviorSubject} from 'rxjs/Rx';

@Injectable()
export class AppService {
  ticks = 0;
  minutes = 0;
  totalItemCount: BehaviorSubject<number> = new BehaviorSubject<number>(10);
  timer() {
    let timer = Observable.timer(2000, 1000);
    timer.subscribe(t => {
      this.ticks = t;
      console.log('Timer from app.service :' + this.ticks);
      if (this.ticks > 0  && this.ticks % 60 === 0 ) {
        this.minutes++;
        console.log(this.minutes + ' Minute');
      }
    });
  }
}
