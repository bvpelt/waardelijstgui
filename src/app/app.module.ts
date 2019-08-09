import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {WaardelijstDetailComponent} from './waardelijst-detail/waardelijst-detail.component';
import {WaardelijstComponent} from './waardelijst/waardelijst.component';
import {MessagesComponent} from './messages/messages.component';

import {AppRoutingModule} from './app-routing.module';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        WaardelijstComponent,
        WaardelijstDetailComponent,
        MessagesComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
