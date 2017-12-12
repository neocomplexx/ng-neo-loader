import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { LoaderState } from './loader';
import { Observable, Subscription } from 'rxjs/Rx';
import { TimerObservable } from 'rxjs/observable/TimerObservable';

@Injectable()
export class LoaderService {

    private loaderSubject = new Subject<LoaderState>();

    loaderState = this.loaderSubject.asObservable();

    constructor() { }

    public show(): any {
        const timer = Observable.timer(500) as TimerObservable;
        // subscribing to a observable returns a subscription object
        const sub = timer.subscribe(t => this.loaderSubject.next(<LoaderState>{showLoading: true}));
        return sub;
        // this.loaderSubject.next(<LoaderState>{showLoading: true});
    }

    public hide(sub: any) {
        sub.unsubscribe();
        this.loaderSubject.next(<LoaderState>{showLoading: false});
    }
}
