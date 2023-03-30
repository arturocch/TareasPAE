import { Component } from '@angular/core';

import { ContactInfo } from 'src/app/shared/interfaces/contact-info';
import { ContactInfoService } from 'src/app/shared/services/contactInfo/contact-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  info: ContactInfo ={}
  constructor(private contactInfoService : ContactInfoService){
    this.getContactInfo()
  } 
  getContactInfo(){
    this.contactInfoService.getContactInfo().then((response:any)=>{
      this.info = response
    })
  }
}
