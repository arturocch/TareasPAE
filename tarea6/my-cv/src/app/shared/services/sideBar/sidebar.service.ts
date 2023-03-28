import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  getSidebar(){
    return [{
      path: '/',
      content: 'Home'
    },
    {
      path: '/contactinfo',
      content: 'Contact information'
    },
    {
      path: '/certifications',
      content: 'Courses and certifications'
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
