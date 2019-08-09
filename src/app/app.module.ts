import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here
import {HttpClientModule} from '@angular/common/http';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {WaardelijstDetailComponent} from './waardelijst-detail/waardelijst-detail.component';
import {WaardelijstComponent} from './waardelijst/waardelijst.component';
import {MessagesComponent} from './messages/messages.component';

import {AppRoutingModule} from './app-routing.module';
import {WaardelijstSearchComponent} from './waardelijst-search/waardelijst-search.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, {dataEncapsulation: false, delay: 500}
        ),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        WaardelijstComponent,
        WaardelijstDetailComponent,
        MessagesComponent,
        WaardelijstSearchComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
