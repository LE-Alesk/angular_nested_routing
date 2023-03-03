import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BarService } from 'src/app/services/bar.service';

@Component({
  selector: 'app-balance-nav',
  templateUrl: './balance-nav.component.html',
  styleUrls: ['./balance-nav.component.css']
})
export class BalanceNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    public barService: BarService) {
  }

}
