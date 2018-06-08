import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoaderService } from './loader.service';
import { LoaderState } from './loader';

@Component({
    selector: 'app-loader',
    templateUrl: 'loader.component.html',
    styleUrls: ['loader.component.scss']
})
export class LoaderComponent implements OnInit {

    public show_loading: boolean = false;

    private subscription: Subscription;

    constructor(public loaderService: LoaderService) { }

    ngOnInit() {
        this.subscription = this.loaderService.loaderState
            .subscribe((state: LoaderState) => {
                this.show_loading = state.showLoading;
                // if (state.showLoading == true){
                //   this.startLoading();
                // }
                // if (state.showLoading == false){
                //   this.stopLoading();
                // }
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    // startLoading(): void{
      // await window.alert('startLoading FN');
      // this.show_loading = true;
      // this.show_loading = !this.show_loading;
      // if (this.show_loading === true){ await window.alert('this.show_loading es TRUE')}
    // }

    // stopLoading(): void{
      // await window.alert('stopLoading FN');
      // this.show_loading = false;
      // this.show_loading = !this.show_loading;
      // if (this.show_loading === false){ await window.alert('this.show_loading es FALSE')}
    // }
}
