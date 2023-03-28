import { Component } from '@angular/core';

import { CourseCertification } from 'src/app/shared/interfaces/course-certification';
import { CourseCertificationService } from 'src/app/shared/services/coursesCertifications/course-certification.service';

@Component({
  selector: 'app-courses-certifications',
  templateUrl: './courses-certifications.component.html',
  styleUrls: ['./courses-certifications.component.scss']
})
export class CoursesCertificationsComponent {
  info: Array<CourseCertification> = []
  constructor(private courseCertificationService  : CourseCertificationService ){
    this.getContactInfo()
  } 
  getContactInfo(){
    this.courseCertificationService.getCoursesCertifications().then((response:any)=>{
      this.info = response
    })
  }
}
