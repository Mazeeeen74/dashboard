import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from '../menu-items';
import { Menu } from '../../interfaces/menu';
import { SideBarToggleService } from '../../services/side-bar-toggle.service';

@Component({
  selector: 'app-side-bar',
  standalone: false,
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent implements OnInit {
  isCollapsed = false;
  

  menuItems: Menu[] = MENU_ITEMS

  
  /*----------  Constructor  ----------*/
  constructor(
    private sideBarToggle : SideBarToggleService
  ) 
  { }
  
  /*----------  NgOnInit lifecycle hook  ----------*/
  ngOnInit(): void {
    this.sideBarToggle.isSideBarCollapsed$.subscribe((res) => this.isCollapsed = res)
  }
  
  
  /*----------  Toggling SideBar  ----------*/
  toggleSideBar() {
    this.isCollapsed = !this.isCollapsed
  }


  
  /*----------  Toggling Submenu  ----------*/
  toggleSubmenu(item: Menu) {
    item.isOpen = !item.isOpen
  }  

}
