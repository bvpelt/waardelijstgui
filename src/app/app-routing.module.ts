import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {WaardelijstComponent} from './waardelijst/waardelijst.component';
import {WaardelijstDetailComponent} from './waardelijst-detail/waardelijst-detail.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './helpers/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: AppComponent,
//        component: HomeComponent,
        canActivate: [AuthGuard] },


//    {path: '', component: HomeComponent, canActivate: [AuthGuard]},

//            {path: '', component: DashboardComponent, canActivate: [AuthGuard]},

            {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
            {path: 'detail/:id', component: WaardelijstDetailComponent, canActivate: [AuthGuard]},
            {path: 'waardelijst', component: WaardelijstComponent, canActivate: [AuthGuard]},
            {path: 'login', component: LoginComponent},
    // otherwise redirect to home
    {path: '**', redirectTo: ''}

];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
