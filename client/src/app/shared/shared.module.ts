import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './paging-header/paging-header.component';
import { ZarCurrencyPipe } from './zar-currency.pipe';
import { PagerComponent } from './pager/pager.component';



@NgModule({
  declarations: [
    PagingHeaderComponent,
    ZarCurrencyPipe,
    PagerComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot()
  ],
  exports:[
    PaginationModule,
    PagingHeaderComponent,
    ZarCurrencyPipe,
    PagerComponent
  ]
})
export class SharedModule { }
