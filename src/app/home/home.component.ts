import { Component, OnInit } from '@angular/core';

import {NewsService} from '../news.service';
import { FormGroup , FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  term:string="";
  form:FormGroup;
  filterNewsContainer = [];
  newsContainer = [];

  currentCountry:string = 'eg';
  currentCategory:string = 'general';

  
  
  constructor( public _NewsService:NewsService) { 
        _NewsService.getNews(this.currentCountry , this.currentCategory).subscribe( x => this.newsContainer = this.filterNewsContainer = x.articles  );
      }
    
  getCountry(c)
  {
    this.currentCountry = c;
   this._NewsService.getNews(this.currentCountry , this.currentCategory).
   subscribe( x => 
    this.newsContainer = this.filterNewsContainer  = x.articles
      );
  }
  getCategory(cat)
  {
    this.currentCategory = cat;
    this._NewsService.getNews(this.currentCountry , this.currentCategory).subscribe( x => this.newsContainer = this.filterNewsContainer = x.articles  );
  }
  countries:object[] = 
  [
    {country:'egypt' , code:'eg'},
    {country:'italy' , code:'it'},
    {country:'Japan' , code:'jp'},
    {country:'turkey' , code:'tr'},
    {country:'Bahrin' , code:'br'},
  ]

  categories:string[] = ["general", "entertainment","science" ,"technology" , "health" ,  "business" , "sports"]


 
  ngOnInit() {

    this.form = new FormGroup({
      search : new FormControl()
    }) 

    this.form.get("search").valueChanges
    .pipe(
      debounceTime(2000)
    )
    .subscribe(value => {
      this.term = value;
      this.newsContainer = this.filterNewsContainer.filter((news) => news.title.toLowerCase().includes(this.term.toLowerCase()))
      console.log(this.newsContainer);
    })

  }

}
