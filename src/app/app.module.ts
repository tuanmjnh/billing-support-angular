import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppRoutingModule, routingComponents } from "./app.routing";
import { AppComponent } from "./app.component";
// Firebase
import { AngularFireModule } from "angularfire2";
// import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule } from "angularfire2/storage";
import { AngularFireAuthModule } from "angularfire2/auth";
import { environment } from "../environments/environment";
// Plugins
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "./plugins/material.module";
// Themes
import { MaterialComponent } from "./themes/material/material.component";
// toastr
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [AppComponent, routingComponents, MaterialComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    FlexLayoutModule,
    MaterialModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
