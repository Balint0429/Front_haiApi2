import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-biciklik',
  templateUrl: './biciklik.component.html',
  styleUrl: './biciklik.component.css'
})
export class BiciklikComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();

  constructor(
    private http: HttpClient,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.getFoglalasok();
  }

  getFoglalasok(): void {
    this.http.get<any[]>('http://localhost:3000/termekek')
      .subscribe(termekek => {
        this.dataSource.data = termekek;
      });
  }
}
