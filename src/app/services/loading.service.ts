import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public isLoading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor() { }
  
  /*----------  Showing loading Screen  ----------*/
  show() {
    this.loadingSubject.next(true);
    console.log("True")
  }

/*----------  Hide Loading Screen  ----------*/
  hide() {
    this.loadingSubject.next(false);
  }
}
