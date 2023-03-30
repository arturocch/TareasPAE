import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }
  getProjects(){
    return new Promise((resolve,reject) => {
      resolve(
        [{
          img:'https://i.ibb.co/khCYMG1/petspotlogo.png',
          name: 'Petspot application ',
          description: 'Development of an application in the mobile framework Flutter, this framework use dart as programming language (object oriented), the implementation integrates the manager of logins using google, and incorporates the google maps services. implementation of firebase (backend as a service) to manage the information of the users and pets. Use of block provider (event, state management). This application was born from the need for a centralized place in which to report lost pets, using GPS to find them.',
          date: 'december 2022',
          emitter: 'ITESO, desarrollo mobil',
        },
        {
          img:'https://as1.ftcdn.net/v2/jpg/04/41/73/28/1000_F_441732816_Eo3fHdX3oImKtXdkYkktCrR1mbwAT9I6.jpg',
          name: 'Recipe book project',
          description: 'Development of an application where you can review recipe for cooking, manage of a profile entity where you are able to add o recipe to favorite. JavaScript and express for backend and application side, bootstrap for frontend',
          date: 'may 2021',
          emitter: 'ITESO, Desarrollo de aplicaciones web',
          
        },
        {
          img:'https://www.creativefabrica.com/wp-content/uploads/2020/11/04/Data-Analytics-Logo-Design-Inspiration-Graphics-6470307-1-580x386.jpg',
          name: 'Data analytics project ',
          description: 'Data analysis project that incorporated the use of dimensional databases andcreation of olap cube, graph databases using neo4j and Microsoft knime for analysis using clustering and decision trees. After the processing of the data the point wat to make an analysis using queries in the specific technology an in the case of the clustering and tree analysis review the confusion matrix and the entropy of the variables',
          date: 'december 2021',
          emitter: 'ITESO, base de datos para toma de decisiones',
          
        },
        {
          img:'https://scalebranding.com/wp-content/uploads/2021/01/s-sudoku-logo.jpg',
          name: 'Sudoku solver school project,',
          description: 'C Implementation of a sudoku solver using backtracking with the ability to show if there is a solution and if there is, to show the number of solutions and to print any of them.',
          date: 'may 2019',
          emitter: 'ITESO, programacion estructurada',
          emitterLink:'https://github.com/arturocch/SUDOKUSOLVER'
        },
        {
          img:'data:image/png;base64,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',
          name: 'Graph library school project',
          description: 'Java implementation of a graph library using object-oriented programming, polymorphism, inheritance and interfaces.',
          date: 'december 2019',
          emitter: 'ITESO, programacion orientada a objetos',
        },
        {
          img:'https://javascriptonthego.files.wordpress.com/2017/04/hashtable1.png',
          name: 'HashTable school project',
          description: 'C implementation of a Hash table using chaining as a collision resolution method, dynamic memory and pointers.',
          date: '28 diciembre 2023',
          emitter: 'ITESO, programacion con memoria dinamica',
        }
      ]
      )
    })
  }
}
