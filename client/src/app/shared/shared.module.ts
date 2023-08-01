import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './paging-header/paging-header.component';
import { ZarCurrencyPipe } from './zar-currency.pipe';
import { PagerComponent } from './pager/pager.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';



@NgModule({
  declarations: [
    PagingHeaderComponent,
    ZarCurrencyPipe,
    PagerComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot()
  ],
  exports:[
    PaginationModule,
    PagingHeaderComponent,
    ZarCurrencyPipe,
    PagerComponent,
    CarouselModule
  ]
})
export class SharedModule { }
