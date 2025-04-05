import { Component, HostListener, OnInit } from '@angular/core';
import { SideBarToggleService } from '../../services/side-bar-toggle.service';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {


/*----------  Constructor  ----------*/
constructor( private sideBarToggle : SideBarToggleService){ 
}


/*----------  NgOnInit  ----------*/
ngOnInit(): void {
  this.onResize();
}



/*----------  Toggling sidebar  ----------*/
toggleSideBar() {
  this.sideBarToggle.isToggled()
}


/*----------  Host Listener For resizing  ----------*/
@HostListener('window:resize')
onResize() {
  if (window.innerWidth < 768) {
    this.sideBarToggle.setSideBar(true);
  } else {
    this.sideBarToggle.setSideBar(false);
  }
}


}
