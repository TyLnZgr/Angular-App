import { Product } from './../../models/product.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() product: Product;
  constructor() {}

  ngOnInit(): void {}
}
