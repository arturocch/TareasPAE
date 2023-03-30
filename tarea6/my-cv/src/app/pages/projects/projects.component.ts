import { Component } from '@angular/core';
import { ProjectService } from 'src/app/shared/services/projects/project.service';
import { Project } from 'src/app/shared/interfaces/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  info: Array<Project> = []
  p:number = 1
  count:number = 5
  paginator:boolean = false
  constructor(private projectService  : ProjectService ){
    this.getProjects()
  } 
  getProjects(){
    this.projectService.getProjects().then((response:any)=>{
      this.info = response
      if(this.info.length>5){
        this.paginator = true
      }
    })
  }
}
