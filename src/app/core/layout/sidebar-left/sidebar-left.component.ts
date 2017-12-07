import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.css']
})
export class SidebarLeftComponent implements OnInit {
  private isExpandLeftMenu = false;

  constructor() { }

  ngOnInit() {
  }

  private hideLeftMenu(leftSideBar: string): any {
    this.isExpandLeftMenu = leftSideBar == 'show'? true : false;
  }
}
