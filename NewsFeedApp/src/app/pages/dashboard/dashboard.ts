import { Component, ViewChild} from '@angular/core';

import {NewsAPIService} from '../../services/newsapi';
import {NewsSource} from '../../newssource';
import {OnsNavigator, onsNotification} from 'angular2-onsenui';

import {NewsPage} from '../news/news';
import {SourceNewsFilterPipe} from './sourcefilter.pipe';

@Component({
  selector: 'dashboard',
  template: require('./dashboard.html'),
  styles: [require('./dashboard.css')]

})

export class DashboardPage {
  

  terms: string = "";
  sources : any;

 
  constructor(_newsAPIService : NewsAPIService, private _navigator : OnsNavigator) {
   _newsAPIService.getSources().subscribe (res =>{
        this.sources = res.sources;
    });
   
  }

  ngOnInit() {

   
  }

   alert() {
    onsNotification.alert('Trial Version 1.0');
  }
  


   push(source) {
    console.log ("Selected News Source: "+ source );
    this._navigator.element.pushPage(NewsPage,  {data: {"source": source}});
  }

 

}
