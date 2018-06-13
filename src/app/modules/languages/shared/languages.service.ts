import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Languages } from "./languages.model";
@Injectable({
  providedIn: "root"
})
export class LanguagesService {
  list: AngularFireList<any>;
  selectedEmployee: Languages = new Languages();
  constructor(private firebase: AngularFireDatabase) {}
  select() {
    this.list = this.firebase.list("employees");
    return this.list;
  }
  insert(model: Languages) {
    this.list.push({
      name: model.name,
      desc: model.desc,
      icon: model.icon,
      orders: model.orders,
      flag: model.flag,
      created: { by: "Admin", at: new Date() }
    });
  }
  update(model: Languages) {
    this.list.update(model.$key, {
      name: model.name,
      desc: model.desc,
      icon: model.icon,
      orders: model.orders,
      flag: model.flag,
      updated: { by: "Admin", at: new Date() }
    });
  }
  delete(model: Languages) {
    this.list.update(model.$key, {
      flag: model.flag == 0 ? 1 : 0,
      deleted: { by: "Admin", at: new Date() }
    });
  }
  remove($key: string) {
    this.list.remove($key);
  }
}
