import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';

import { FooterComponent } from './footer/footer.component';
import { ProductService } from './product/product.service';
import { ProductItemComponent } from './product/products-list/product-item/product-item.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductsListComponent } from './product/products-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    FooterComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ProductsListComponent,
  ],
  imports: [BrowserModule, FormsModule, NgxPaginationModule, AppRoutingModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
