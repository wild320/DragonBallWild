import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();
  private hideDelay: number = 1000; 

  show() {
    this.loadingSubject.next(true);
  }

  hide() {
    setTimeout(() => this.loadingSubject.next(false), this.hideDelay);
  }
}
