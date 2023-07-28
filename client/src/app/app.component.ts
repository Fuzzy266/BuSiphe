import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import { Pagination } from './models/pagination.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'BuSiphe';

  products: Product[] = [];

  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    this.http.get<Pagination<Product>>('https://localhost:5001/api/products?pageSize=50').subscribe({
      next: response => this.products = response.data,
      error: err => console.error(err),
      complete: () =>{
        console.log("request completed");
        console.log("extra statement");
      }
    })
  }
}
