import {Injectable} from '@angular/core';
import {Http,Headers, RequestOptions} from '@angular/http';
import {Observable} from "rxjs";
import 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
// https://newsapi.org/
export class NewsAPIService {

 articlesURL :string ="https://newsapi.org/v1/articles?&apiKey=0028b76c44d74f958803f17ed60a5c46&";   
 sourcesURL : string ="https://newsapi.org/v1/sources?language=en";

  constructor (private _http: Http) {
    console.log("News API Service initiated")
  }

  getSources (){
      return  this._http.get(this.sourcesURL).map(res => res.json());; 
  }

  getArticles (source:string, sortBy:string =null){
      let url = this.articlesURL+"source=" +source+ "&sortBy="+sortBy;
      return  this._http.get(url).map(res => res.json());; 
  }


  }