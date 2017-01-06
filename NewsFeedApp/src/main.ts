// Onsen UI Styling and Icons
require('onsenui/stylus/blue-basic-theme.styl');
require('onsenui/css/onsenui.css');

// Application code starts here
import {enableProdMode, NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {HttpModule} from '@angular/http';
import {OnsenModule} from 'angular2-onsenui';

import {NewsFeedApplication} from './app/newsfeed';
import {NewsAPIService} from './app/services/newsapi';
import {DashboardPage} from './app/pages/dashboard/dashboard';
import {NewsPage} from './app/pages/news/news';

import {SourceNewsFilterPipe} from './app/pages/dashboard/sourcefilter.pipe'




// Enable production mode when in production mode.
if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

@NgModule({
    imports: [
        BrowserModule,
        OnsenModule,
        HttpModule,
    ],
    declarations: [
        NewsFeedApplication,
        DashboardPage,
        NewsPage,
        SourceNewsFilterPipe
    ],
    bootstrap: [
        NewsFeedApplication,
        NewsPage
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
    providers : [NewsAPIService]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.error(err));
