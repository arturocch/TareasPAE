import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudyService {

  constructor() { }
  getStudies(){
    return new Promise((resolve,reject) => {
      resolve(
        [{
          img:'https://yt3.googleusercontent.com/rwL2nJlD__Fj232jo-pY4JZSwYBCOsGZY2PTHf526opRT4wmaVgaVComTqVEV3jrLQRwSlPGNx0=s900-c-k-c0x00ffffff-no-rj',
          name: 'Computer Systems Engineering',
          emitterLink : 'https://carreras.iteso.mx/ingenieria-sistemas-computacionales',
          date: 'January 2019 - December 2023',
          emitter: 'ITESO, Universidad Jesuita De Guadalajara',
        },
        
      ]
      )
    })
  }
}
