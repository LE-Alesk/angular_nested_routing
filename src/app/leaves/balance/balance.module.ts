//balance.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalanceRoutingModule } from './balance-routing.module';
import { CasualComponent } from './casual/casual.component';
import { EarnedComponent } from './earned/earned.component';
import { BalanceComponent } from './balance.component';
import { Page404balanceComponent } from './page404balance/page404balance.component';
import { BalanceNavComponent } from './balance-nav/balance-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { MaterialModule } from '../../material.module';
@NgModule({
  declarations: [
    BalanceComponent,
    CasualComponent,
    EarnedComponent,
    Page404balanceComponent,
    BalanceNavComponent
  ],
  imports: [
    CommonModule,
    BalanceRoutingModule,
    LayoutModule,
    MaterialModule
  ]
})
export class BalanceModule { }
