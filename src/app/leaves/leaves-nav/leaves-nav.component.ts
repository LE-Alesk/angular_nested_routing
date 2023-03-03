import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BarService } from 'src/app/services/bar.service';

@Component({
  selector: 'app-leaves-nav',
  templateUrl: './leaves-nav.component.html',
  styleUrls: ['./leaves-nav.component.css']
})
export class LeavesNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  leavesBar: boolean = true;
  constructor(private breakpointObserver: BreakpointObserver,
    public barService: BarService) {

    this.barService.get("leaves").subscribe(res => {
      this.leavesBar = res;
    })

  }
}
