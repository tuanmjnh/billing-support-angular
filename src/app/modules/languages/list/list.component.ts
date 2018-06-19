import { Component, OnInit, ViewChild } from "@angular/core";
import { LanguagesService } from "../shared/languages.service";
import { Languages } from "../shared/languages.model";
import { MatSort, MatPaginator, MatTableDataSource } from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  routerPath = {};
  displayedColumns = ["select", "name", "icon", "orders", "actions"];
  dataSource = new MatTableDataSource<Languages>();
  selection = new SelectionModel<Languages>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private languagesService: LanguagesService) {}
  ngOnInit() {
    // Router Path
    this.routerPath = this.languagesService.routerPath;
    // dataSource
    this.languagesService.selectId().subscribe(data => {
      this.dataSource.data = data;
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  edit(item) {
    console.log(item)
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
