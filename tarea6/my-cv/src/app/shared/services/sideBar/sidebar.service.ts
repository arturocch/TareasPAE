import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  getSidebar(){
    return [{
      path: '/home',
      content: 'About me'
    },
    {
      path: '/contactinfo',
      content: 'Contact information'
    },
    {
      path: '/certifications',
      content: 'Work experience'
    },
    {
      path: '/projects',
      content: 'Projects'
    },
    {
      path: '/studies',
      content: 'Studies'
    },

  ]
  }

}
