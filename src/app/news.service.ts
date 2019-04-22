import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  getUsers()
  {
    return this.users;
  }
  
  users:object[] = 
  [
    {name:'ahmed' , age:25 , gender:'male' ,salary:65464556 ,  dateOfBirth:'2/8/2001'},
    {name:'mai' , age:25 , gender:'female' ,salary:23561 ,  dateOfBirth:'9/8/2001'},
    {name:'abdo' , age:25 , gender:'male' ,salary:65464556 ,  dateOfBirth:'2/8/2001'},
    {name:'aya' , age:25 , gender:'female' ,salary:65464556 ,  dateOfBirth:'2/8/2001'},
    {name:'ahmed' , age:25 , gender:'male' ,salary:65464556 ,  dateOfBirth:'10/8/2001'},
    {name:'ahmed' , age:25 , gender:'male' ,salary:65464556 ,  dateOfBirth:'2/8/2001'},
    {name:'ali' , age:25 , gender:'male' ,salary:65464556 ,  dateOfBirth:'2/8/2001'}
    
  ]

  constructor(public _http:HttpClient) { }
  getNews(c , cat):Observable<any>
  {
    return this._http.get("https://newsapi.org/v2/top-headlines?country="+c+"&category="+cat+"&apiKey=d34d49ce3a794aca80d1ae821239b0eb")
  }
}
