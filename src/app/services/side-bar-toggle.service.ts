import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideBarToggleService {
  private isSideBarCollapsed = new BehaviorSubject<boolean>(false);
  isSideBarCollapsed$ = this.isSideBarCollapsed.asObservable();

  constructor() { }

  /*----------  Toggling Function  ----------*/
  isToggled() {
    this.isSideBarCollapsed.next(!this.isSideBarCollapsed.value)
  }

/*----------  Setting SideBar Status  ----------*/
  setSideBar(status:boolean){ 
    this.isSideBarCollapsed.next(status);
  }
  

}
