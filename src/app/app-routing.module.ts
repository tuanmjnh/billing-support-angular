import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Modules
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { AuthComponent } from './modules/auth/auth.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
// import { LanguagesComponent } from './modules/languages/languages.component';

const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'auth', component: AuthComponent },
    { path: 'dashboard', component: DashboardComponent },
    // { path: 'languages', component: LanguagesComponent },
    { path: 'languages', loadChildren: './modules/languages/languages.module#LanguagesModule' },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            // { enableTracing: true } // <-- debugging purposes only
        )],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
export const routingComponents = [
    NotFoundComponent,
    AuthComponent,
    DashboardComponent,
    // LanguagesComponent,
];
