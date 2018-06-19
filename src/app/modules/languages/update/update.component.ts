import { Component, OnInit } from "@angular/core";
import { NgForm, FormGroup } from "@angular/forms";
import { LanguagesService } from "../shared/languages.service";
import { Languages } from "../shared/languages.model";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.css"],
  providers: [LanguagesService]
})
export class UpdateComponent implements OnInit {
  routerPath = {};
  item: Languages = new Languages();
  constructor(private languagesService: LanguagesService) {}

  ngOnInit() {
    // Router Path
    this.routerPath = this.languagesService.routerPath;
    this.item = this.languagesService.item;
    console.log(this.languagesService.item);
  }
  onInsert(formData: NgForm) {
    if (formData.valid) {
      if (formData.value.id)
        this.languagesService.update(formData.value.id, formData.value);
      else this.languagesService.insert(formData.value);

      // if (employeeForm.value.$key == null) this.employeeService.insertEmployee(employeeForm.value);
      // else this.employeeService.updateEmployee(employeeForm.value);
      // this.resetForm();
      // this.toastr.success('Submitted Successfully', 'Employee Register');
      this.item = new Languages();
    } else {
      console.log("form invalid!");
    }
  }
  resetForm(formData?: NgForm) {
    // console.log(formData.invalid);
    // if (formData != null) formData.reset();
    // else this.item = new Languages();
    formData.reset();
    // Object.keys(formData.controls).forEach(key => {
    //   formData.controls[key].setErrors(null)
    // });
  }
}
