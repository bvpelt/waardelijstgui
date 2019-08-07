import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here
import {AppComponent} from './app.component';
import {WaardelijstComponent} from './waardelijst/waardelijst.component';
import {WaardelijstDetailComponent} from './waardelijst-detail/waardelijst-detail.component';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    WaardelijstComponent,
    WaardelijstDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
