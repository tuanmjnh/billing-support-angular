import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
// Firebase
import { AngularFireModule } from "angularfire2";
// import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule } from "angularfire2/storage";
import { AngularFireAuthModule } from "angularfire2/auth";
import { environment } from "../environments/environment";
// Plugins
// import { MaterialModule } from './plugins/material.module';
// Themes
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './themes/navbar/navbar.component';
import { ToolbarComponent } from './themes/toolbar/toolbar.component';
import { FooterComponent } from './themes/footer/footer.component';
@NgModule({
  declarations: [AppComponent, routingComponents, NavbarComponent, ToolbarComponent, FooterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    NgbModule.forRoot()
    // MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
