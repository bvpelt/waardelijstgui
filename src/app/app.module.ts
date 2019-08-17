import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; // <-- NgModel lives here
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {DashboardComponent} from './dashboard/dashboard.component';
import {WaardelijstDetailComponent} from './waardelijst-detail/waardelijst-detail.component';
import {WaardelijstComponent} from './waardelijst/waardelijst.component';
import {WaardelijstSearchComponent} from './waardelijst-search/waardelijst-search.component';
import {MessagesComponent} from './messages/messages.component';
// used to create fake backend
// import {fakeBackendProvider} from './helpers/fake-backend';
import {BasicAuthInterceptor} from './helpers/basic-auth.interceptor';
import {ErrorInterceptor} from './helpers/error.interceptor';

import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import { WaardelijstentryComponent } from './waardelijstentry/waardelijstentry.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        /*
        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, {dataEncapsulation: false, delay: 500}
        ),
         */
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        WaardelijstComponent,
        WaardelijstDetailComponent,
        MessagesComponent,
        WaardelijstSearchComponent,
        HomeComponent,
        LoginComponent,
        WaardelijstentryComponent
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true} // ,

        // provider used to create fake backend
        // fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
