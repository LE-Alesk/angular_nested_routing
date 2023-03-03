import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatiService } from '../services/dati.service';
import { BarService } from '../services/bar.service';
import { Libro } from '../services/libro';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol', 'demo-bot'];

  libri$: Observable<Libro[]>= new Observable<Libro[]>();
  isAdd: boolean = false;
  libro?: Libro = new Libro();


  ngOnInit(): void{ }


  constructor(private barService: BarService, private datiService: DatiService) {
    this.libri$ = this.datiService.getAll()
  }

  add() {
    this.isAdd = !this.isAdd;
  }

  canc(id: number) {
    this.datiService.canc(id).subscribe(res => {
      this.libri$ = this.datiService.getAll()

    });
  }

  update(libro: Libro) {
    this.libro = libro;
    this.add();
  }

  onFatto(fatto: boolean) {
    this.add();
    this.libro = new Libro();
    if (fatto)
      this.libri$ = this.datiService.getAll()
  }

}

