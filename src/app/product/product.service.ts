import { Injectable } from '@angular/core';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      title: 'Lenovo',
      description:
        'Lenovo ThinkPad E15 Gen 3 AMD Ryzen 5 5500U 40GB 512GB Windows 10 Home 15.6" FHD Taşınabilir Bilgisayar',
      imgPath: '../../../assets/lenova.jfif',
      price: 16000,
    },
    {
      id: 2,
      title: 'Excalibur',
      description:
        'Casper Excalibur G900.1180-BF60X-B Intel Core i7 11800H 16GB 1 TB SSD RTX3060 Freedos 15.6" FHD Taşınabilir Bilgisayar',
      imgPath: '../../../assets/excalibur.jfif',
      price: 21000,
    },
    {
      id: 3,
      title: 'Monster',
      description:
        'Monster Abra A5 V16.7.3 Intel Core I5 11400H 16GB 500GB SSD GTX1650 Freedos 15.6 Fhd Taşınabilir Bilgisayar',
      imgPath: '../../../assets/monster.jfif',
      price: 12590,
    },
    {
      id: 4,
      title: 'Casper',
      description:
        'Casper Nirvana X500.1065-8V00X-G-F Intel Core i7 1065G7 8GB 500GB SSD Freedos 15.6 FHD Taşınabilir Bilgisayar',
      imgPath: '../../../assets/casper.jfif',
      price: 7398,
    },
    {
      id: 5,
      title: 'Asus',
      description:
        'Asus TUF F17 FX706HEB-HX129 Intel Core i7 11800H 16GB 1TB SSD RTX3050 Ti Freedos 17.3 FHD ',
      imgPath: '../../../assets/asus.jfif',
      price: 23640,
    },
    {
      id: 6,
      title: 'HP',
      description:
        'Hp 15S-FQ2027NT Intel Core i5 1135G7 8GB 512GB SSD 15.6" Fhd Taşınabilir Bilgisayar 2N2M8EA',
      imgPath: '../../../assets/hp.jfif',
      price: 8000,
    },
    {
      id: 7,
      title: 'Asus2',
      description:
        'Asus X509UA-BR325 Intel Core i3 7020U 4GB 256GB SSD Freedos 15.6" Taşınabilir Bilgisayar',
      imgPath: '../../../assets/asus2.jfif',
      price: 5000,
    },
    {
      id: 8,
      title: 'Dell',
      description:
        'Dell Gaming G15 5511 Intel Core i7 11800H 16GB 512GB SSD Nvidia RTX3050 Ti 15.6" FHD  ',
      imgPath: '../../../assets/dell.jfif',
      price: 19300,
    },
    {
      id: 9,
      title: 'Lenova2',
      description:
        'Lenovo IdeaPad Gaming 3 Intel Core i5 10300H 8GB RAM 512GB SSD GTX 1650Ti Windows 10 Home 15.6" FHD Taşınabilir Bilgisayar',
      imgPath: '../../../assets/lenova2.jfif',
      price: 12800,
    },
    {
      id: 10,
      title: 'Huawei',
      description:
        'Huawei Matebook D 16 AMD Ryzen 5 4600H 16GB 512GB SSD Windows 10 Home 16.1" FHD Taşınabilir Bilgisayar',
      imgPath: '../../../assets/huawei.jfif',
      price: 10400,
    },
    {
      id: 11,
      title: 'Asus 3',
      description:
        'Asus D409DA-BV158 AMD Ryzen 3 3200U 4GB 256GB SSD 14" Freedos Taşınabilir Bilgisayar',
      imgPath: '../../../assets/asus3.jfif',
      price: 4800,
    },
    {
      id: 12,
      title: 'Lenova 3',
      description:
        'Lenovo IdeaPad Intel Core i3 1005G1 4GB 256GB SSD Freedos 14" FHD Taşınabilir Bilgisayar ',
      imgPath: '../../../assets/lenova3.jfif',
      price: 5000,
    },
    {
      id: 13,
      title: 'Dell 2',
      description:
        'Dell Vostro 3500 Intel Core i7 1165G7 16GB 512GB SSD Ubuntu 15.6" Taşınabilir Bilgisayar ',
      imgPath: '../../../assets/dell2.jfif',
      price: 13000,
    },
    {
      id: 14,
      title: 'Apple',
      description:
        'Apple MacBook Pro Intel Core i5 16GB 512GB SSD macOS 13" Taşınabilir Bilgisayar  Uzay Grisi',
      imgPath: '../../../assets/apple.jfif',
      price: 21000,
    },
    {
      id: 15,
      title: 'Apple 2',
      description:
        'Apple MacBook Air M1 Çip 8GB 256GB SSD macOS 13" QHD Taşınabilir Bilgisayar Gümüş',
      imgPath: '../../../assets/apple2.jfif',
      price: 13500,
    },
  ];
  constructor() {}

  getProducts() {
    return this.products.slice();
  }
}
