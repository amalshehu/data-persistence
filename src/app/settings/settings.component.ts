import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {TimerObservable} from 'rxjs/observable/TimerObservable';

@Component({
  moduleId: module.id,
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, OnDestroy {

    private tick: any;
    subscription;
    constructor() {
    }

    ngOnInit() {
      let timer = TimerObservable.create(2000, 1000);
      this.subscription = timer.subscribe(t => {
        this.tick = t;
      });
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
}
