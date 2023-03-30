
import { Component } from '@angular/core';

import { Sidebar } from 'src/app/shared/interfaces/sidebar';
import { SidebarService } from 'src/app/shared/services/sideBar/sidebar.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
  menu: Array<Sidebar>= []
  constructor(private sidebarService: SidebarService){
    this.traerSidebar()
  }

  traerSidebar(){
    this.menu = this.sidebarService.getSidebar()
  }

}
