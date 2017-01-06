import { Component, OnInit} from '@angular/core';

import {NewsAPIService} from '../../services/newsapi';
import {NewsSource} from '../../newssource';
import {OnsNavigator, Params} from 'angular2-onsenui';

import {DashboardPage} from '../dashboard/dashboard';

@Component({
  selector: 'ons-page[news]',
  template: require('./news.html'),
  styles: [require('./news.css')]

})

export class NewsPage implements OnInit {
  
  type : string= 'Showing  Top Articles';
  loaded : boolean = false;
  articles : Object;
  selectedNewsSource ;

  constructor(private _newsAPIService : NewsAPIService, private _navigator :OnsNavigator, private _params: Params ) {
     this.selectedNewsSource = this._params.data;
        let paramValue = this._params.data;
        this.articles = this._newsAPIService.getArticles(this.selectedNewsSource.source.id,'top').subscribe (res => {
          this.articles = res.articles;
          this.loaded = true;
          console.log (this.articles);  
      });
        
 }

 ngOnInit() : void{
 }

reload (){
  console.log ("Reload" + this.type);
}

}
