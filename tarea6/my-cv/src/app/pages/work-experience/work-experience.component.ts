import { Component } from '@angular/core';
import { Work } from 'src/app/shared/interfaces/work';
import { WorkExperienceService } from 'src/app/shared/services/workExperience/work-experience.service';


@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {
  info: Array<Work> = []
  p:number = 1
  count:number = 5
  paginator:boolean = false
  constructor(private workService : WorkExperienceService ){
    this.getWorks()
  } 
  getWorks(){
    this.workService.getWorks().then((response:any)=>{
      this.info = response
      if(this.info.length>5){
        this.paginator = true
      }
    })
  }
}
