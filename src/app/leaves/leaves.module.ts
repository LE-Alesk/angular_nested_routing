//leaves.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeavesRoutingModule } from './leaves-routing.module';
import { LeavesComponent } from './leaves.component';
import { ApplyComponent } from './apply/apply.component';
import { Page404leavesComponent } from './page404leaves/page404leaves.component';
import { LeavesNavComponent } from './leaves-nav/leaves-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    LeavesComponent,
    ApplyComponent,
    Page404leavesComponent,
    LeavesNavComponent
  ],
  imports: [
    CommonModule,
    LeavesRoutingModule,
    LayoutModule,
    MaterialModule
  ]
})
export class LeavesModule { }
