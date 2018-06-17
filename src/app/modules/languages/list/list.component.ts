import { Component, OnInit } from "@angular/core";
import { LanguagesService } from "../shared/languages.service";
import { Languages } from "../shared/languages.model";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  displayedColumns = ["position", "name", "weight", "symbol"];
  dataSource: Languages[];
  items: any;
  constructor(private languagesService: LanguagesService) {
    this.items = this.languagesService.selectId();
  }

  // constructor(private afs: AngularFirestore) {
  // this._collection = this.afs.collection<Languages>("languages");
  // this.items = this._collection.valueChanges();
  //this.items = this._collection.valueChanges();
  // this.items = this.afs.collection("languages").valueChanges();
  // }

  ngOnInit() {
    var a = new Languages();
    a.name = "Tiếng Việt";
    a.flag = 1;
    a.icon = "tiengviet";
    a.orders = 1;
    this.languagesService.insert(a);
    console.log(this.languagesService.selectId());
  }
}
