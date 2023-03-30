import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {

  constructor() { }

  getContactInfo(){
    return new Promise((resolve,reject) => {
      resolve(
        {
          name: 'Arturo Corona',
          email: 'arturocch@outlook.com',
          phone: '3318911429',
          birthday: '28 april 1997',
          linkedin: 'https://www.linkedin.com/in/arturo-corona-chavez-25b06511b/',
          profilepic: 'https://i.ibb.co/L1fmyxp/profilepic.jpg',
          bio: 'Soy un ingeniero en sistemas apasionado por la tecnología y siempre motivado a aprender más. Me gusta enfrentar nuevos desafíos, y estoy comprometido a brindar soluciones innovadoras y de calidad.'
        }
      )
    })
  }
}
