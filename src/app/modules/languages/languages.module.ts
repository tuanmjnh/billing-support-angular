import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguagesRoutingModule } from './languages-routing.module';
// import { RecentSubmissionsComponent } from './recent-submissions/recent-submissions.component';
// import { NewSubmissionComponent } from './new-submission/new-submission.component';
// import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    LanguagesRoutingModule,
    // SharedModule
  ],
  declarations: [] // FormComponent, RecentSubmissionsComponent, NewSubmissionComponent
})
export class LanguagesModule { }
