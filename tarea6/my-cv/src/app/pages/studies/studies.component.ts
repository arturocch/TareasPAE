import { Component } from '@angular/core';
import { Study } from 'src/app/shared/interfaces/study';
import { StudyService } from 'src/app/shared/services/studies/study.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent {
  info: Array<Study> = []
  p:number = 1
  count:number = 5
  paginator:boolean = false
  constructor(private studyService : StudyService ){
    this.getStudies()
  } 
  getStudies(){
    this.studyService.getStudies().then((response:any)=>{
      this.info = response
      if(this.info.length>5){
        this.paginator = true
      }
    })
  }
}
