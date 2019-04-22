import { Component, OnInit } from '@angular/core';


import {NewsService} from '../news.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  hambozo = [];
  constructor(_NewsService:NewsService) {

    this.hambozo = _NewsService.getUsers();
   }

  ngOnInit() {
  }

}
