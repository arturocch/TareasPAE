import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  constructor() { }
  getWorks(){
    return new Promise((resolve,reject) => {
      resolve(
        [{
          img:'https://lh5.googleusercontent.com/-KSTB9U_Yx2Y/AAAAAAAAAAI/AAAAAAAAAAA/CKAXxyAkWi4/s44-p-k-no-ns-nd/photo.jpg',
          name: 'LOGISTIC ASSITANT AND DATA ANALYST',
          description: 'Currently working in a logistic company as a logistic assistant and data analyst, basically my job is to keep track of the freights made day by day, keep in contact with the operators and with the office area so everyone is informed about what’s going on, also I do reports of the stored data in order to make decisions using the tool, Power BI.',
          date: 'november 2021 - actual',
          emitter: 'REDCOLD Transport',
        },
        {
          img:'https://jobs.beliveo.com/assets/logo-small.png',
          name: 'Biligual agent at beliveo',
          description: 'Currently working in a logistic company as a logistic assistant and data analyst, basically my job is to keep track of the freights made day by day, keep in contact with the operators and with the office area so everyone is informed about what’s going on, also I do reports of the stored data in order to make decisions using the tool, Power BI.',
          date: 'november 2018 - march 2019',
          emitter: 'REDCOLD Transport',
        },
        
      ]
      )
    })
  }
}
