import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { Languages } from "./languages.model";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { convertObject } from "../../../common/Helpers";
@Injectable({
  providedIn: "root"
})
export class LanguagesService {
  readonly path = "languages";
  collection: AngularFirestoreCollection<Languages>;
  items: Observable<Languages[]>;
  constructor(private afs: AngularFirestore) {}
  select() {
    // this.collection = this.afs.collection<Languages>(this.path);
    return (this.items = this.afs
      .collection<Languages>(this.path)
      .valueChanges());
  }
  selectRes() {
    // this.collection = this.afs.collection<Languages>(this.path);
    // this.select().subscribe(res => {
    //   this.itemsRes.push(res)
    // });
  }
  selectId() {
    return this.afs
      .collection<Languages>(this.path)
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as Languages;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }
  insert(model: Languages) {
    model.created = { by: "Admin", at: new Date() };
    this.afs.collection(this.path).add(model);
    // this.collection.push({
    //   name: model.name,
    //   desc: model.desc,
    //   icon: model.icon,
    //   orders: model.orders,
    //   flag: model.flag,
    //   created: { by: "Admin", at: new Date() }
    // });
  }
  update(id: string, model: Partial<Languages>): Promise<void> {
    model.updated = { by: "Admin", at: new Date() };
    return this.afs.doc<Languages>(`${this.path}/${id}`).update(model);
    // this.list.update(model.$key, {
    //   name: model.name,
    //   desc: model.desc,
    //   icon: model.icon,
    //   orders: model.orders,
    //   flag: model.flag,
    //   updated: { by: "Admin", at: new Date() }
    // });
  }
  delete(id: string, model: Languages): Promise<void> {
    model.flag = 0 ? 1 : 0;
    model.deleted = { by: "Admin", at: new Date() };
    return this.afs.doc<Languages>(`${this.path}/${id}`).update(model);
    // this.list.update(model.$key, {
    //   flag: model.flag == 0 ? 1 : 0,
    //   deleted: { by: "Admin", at: new Date() }
    // });
  }
  remove(id: string): Promise<void> {
    return this.afs.doc<Languages>(`${this.path}/${id}`).delete();
  }
}
