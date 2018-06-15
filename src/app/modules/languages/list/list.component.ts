import { Component, OnInit } from "@angular/core";
// import { LanguagesService } from "../shared/languages.service";
import { Languages } from "../shared/languages.model";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  displayedColumns = ["position", "name", "weight", "symbol"];
  dataSource: Languages[];
  private _collection: AngularFirestoreCollection<Languages>;
  items: any;
  constructor(private afs: AngularFirestore) {
    this._collection = this.afs.collection<Languages>("languages");
    // this.items = this._collection.valueChanges();
    //this.items = this._collection.valueChanges();
    this.items = this.afs.collection("languages").valueChanges();
  }

  ngOnInit() {
    var a = this.items.subscribe(res => (this.items.data = res));
    console.log(this.items);
  }
}
