import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { Languages } from "./languages.model";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { convertObject } from "../../../shared/helpers";
@Injectable({
  providedIn: "root"
})
export class LanguagesService {
  // readonly path = "languages";
  router = {
    path: "languages",
    list: "list",
    update: "update"
    // pathList: `/${this.path}/list`,
    // pathUpdate: `/${this.path}/update`
  };
  collection: AngularFirestoreCollection<Languages>;
  items: Observable<Languages[]> = new Observable<Languages[]>();
  item: Languages = new Languages();
  constructor(private afs: AngularFirestore) {}
  select() {
    // this.collection = this.afs.collection<Languages>(this.path);
    return (this.items = this.afs
      .collection<Languages>(this.router.path)
      .valueChanges());
  }
  selectRes() {
    // this.collection = this.afs.collection<Languages>(this.path);
    // this.select().subscribe(res => {
    //   this.itemsRes.push(res)
    // });
  }
  selectWithId() {
    return this.afs
      .collection<Languages>(this.router.path)
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
  selectById(id: string) {
    return this.afs
      .collection<Languages>(this.router.path)
      .doc<Languages>(id)
      .valueChanges();
  }
  insert(model: Languages) {
    model.created = { by: "Admin", at: new Date() };
    this.afs.collection(this.router.path).add(convertObject(model));
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
    return this.afs
      .doc<Languages>(`${this.router.path}/${id}`)
      .update(convertObject(model));
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
    return this.afs
      .doc<Languages>(`${this.router.path}/${id}`)
      .update(convertObject(model));
    // this.list.update(model.$key, {
    //   flag: model.flag == 0 ? 1 : 0,
    //   deleted: { by: "Admin", at: new Date() }
    // });
  }
  remove(id: string): Promise<void> {
    return this.afs.doc<Languages>(`${this.router.path}/${id}`).delete();
  }
}
