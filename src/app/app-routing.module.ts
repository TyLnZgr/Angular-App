import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './product/products-list/products-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', component: ProductComponent },
  { path: 'products', component: ProductsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
