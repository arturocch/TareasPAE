import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseCertificationService {

  constructor() { }
  getCoursesCertifications(){
    return new Promise((resolve,reject) => {
      resolve(
        [{
          name: 'fake curso',
          description: 'fake description  esto es una descripcion falsa a la cual solo se le ha agregado texto para ocupar mas espacio dentro de la card y parezca mas real',
          date: '28 diciembre 2023',
          emitter: 'escuela falsa',
          emitterLink:'ejemplo.com'
        },
        {
          name: 'fake curso 2',
          description: 'fake description  esto es una descripcion falsa a la cual solo se le ha agregado texto para ocupar mas espacio dentro de la card y parezca mas real',
          date: '28 diciembre 2023',
          emitter: 'escuela falsa',
          emitterLink:'ejemplo.com'
        },
        {
          name: 'fake curso 2',
          description: 'fake description  esto es una descripcion falsa a la cual solo se le ha agregado texto para ocupar mas espacio dentro de la card y parezca mas real',
          date: '28 diciembre 2023',
          emitter: 'escuela falsa',
          emitterLink:'ejemplo.com'
        },
        {
          name: 'fake curso 2',
          description: 'fake description  esto es una descripcion falsa a la cual solo se le ha agregado texto para ocupar mas espacio dentro de la card y parezca mas real',
          date: '28 diciembre 2023',
          emitter: 'escuela falsa',
          emitterLink:'ejemplo.com'
        }
      ]
      )
    })
  }
}
