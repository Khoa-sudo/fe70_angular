import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  template: `<div>
    <div class="card text-left">
      <img class="card-img-top" [src]="product.img" alt="" />
      <div class="card-body">
        <h4 class="card-title">{{ product.name }}</h4>
        <p class="card-text">{{ product.price }}</p>
        <button class="btn btn-primary" (click)="viewDetail()">
          Xem chi tiết
        </button>
        <button class="btn btn-success ml-2">Thêm giỏ hàng</button>
      </div>
    </div>
  </div>`,
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = {
    id: 0,
    name: 'aa',
    img: 'https://picsum.photos/id/10/200',
    price: 1000,
  };
  @Output() xemChiTiet = new EventEmitter();
  viewDetail() {
    //emit(gia_tri_output): Đưa giá trị ra bên ngoài thẻ
    this.xemChiTiet.emit(this.product);
  }
  constructor() {}

  ngOnInit() {}
}

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}
