import { Component, OnInit } from '@angular/core';
import { Product } from './shared/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'BuSiphe';

  products: Product[] = [];

  constructor(){
  }

  ngOnInit(): void {
    
  }
}