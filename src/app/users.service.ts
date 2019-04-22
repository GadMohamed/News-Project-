import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  users:object[] =
  [
   {name:'jo',age:'22',salary:'15200',datOfBirth:'1995'} ,
   {name:'ali ',age:'22',salary:'15200',datOfBirth:'1995'} , 
   {name:'gad',age:'22',salary:'15200',datOfBirth:'1995'} ,
   {name:'lsdfghjdfjkl',age:'22',salary:'15200',datOfBirth:'1995'} ,
   {name:'hassan',age:'22',salary:'15200',datOfBirth:'1995'} ,
  ]

  constructor() { }
}
