import { Component, ViewChild} from '@angular/core';

import {NewsAPIService} from '../../services/newsapi';
import {NewsSource} from '../../newssource';
import {OnsNavigator} from 'angular2-onsenui';

import {NewsPage} from '../news/news';

@Component({
  selector: 'dashboard',
  template: require('./dashboard.html'),
  styles: [require('./dashboard.css')]

})

export class DashboardPage {
  
  sources : Object;

 
  constructor(_newsAPIService : NewsAPIService, private _navigator : OnsNavigator) {
   _newsAPIService.getSources().subscribe (res =>{
        this.sources = res.sources;
    });
   
  }

  ngOnInit() {

   
  }

   push(source) {
    console.log ("Selected News Source: "+ source );
    this._navigator.element.pushPage(NewsPage,  {data: {"source": source}});
  }

 

}
