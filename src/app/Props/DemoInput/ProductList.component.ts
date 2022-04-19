import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  template: `<div class="container">
    <div class="row">
      <div class="col-4" *ngFor="let item of arrProduct; let i = index">
        <app-product-item (xemChiTiet)="xemChiTiet($event)" [product]="item"></app-product-item>
      </div>
    </div>

    <div class="row mt-2">
      <div class="col-4">
        <h3>{{productDetail.name}}</h3>
        <img [src]="productDetail.img" alt="" height="350" />
      </div>
      <div class="col-8">
          <h3>Product Detail</h3>
        <table class="table">
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>img</th>
          </tr>
          <tr>
              <td>{{productDetail.id}}</td>
              <td>{{productDetail.name}}</td>
              <td>{{productDetail.price}}</td>
              <td><img src={{productDetail.img}} alt="" width="100"></td>
          </tr>
        </table>
      </div>
    </div>
  </div>`,
})
export class ProductListComponent implements OnInit {
  arrProduct: Product[] = [
    {
      id: 1,
      name: 'Iphone',
      price: 1000,
      img: 'https://picsum.photos/id/10/500',
    },
    {
      id: 2,
      name: 'Iphone X',
      price: 1200,
      img: 'https://picsum.photos/id/9/500',
    },
    {
      id: 3,
      name: 'Iphone XS',
      price: 1300,
      img: 'https://picsum.photos/id/7/500',
    },
  ];
  productDetail: Product = {
    id: 3,
    name: 'Iphone XS',
    price: 1300,
    img: 'https://picsum.photos/id/10/200',
  };
  constructor() {}
xemChiTiet(outPutValue:Product){
    this.productDetail=outPutValue;
}
  ngOnInit() {}
}

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}
