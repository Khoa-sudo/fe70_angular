import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './DemoInput/ProductList.component';

@Component({
  selector: 'app-props-demo',
  template: `<div class="container">
    <h3>Input - Output</h3>
    <h3>Product detail</h3>
    <div class="form-group">
      <p>Id</p>
      <input class="form-control" [(ngModel)]="product.id" />
    </div>
    <div class="form-group">
      <p>Name</p>
      <input class="form-control" [(ngModel)]="product.name" />
    </div>
    <div class="form-group">
      <p>Price</p>
      <input class="form-control" [(ngModel)]="product.price" />
    </div>
    <div class="form-group">
      <button class="btn btn-success" (click)="addProduct()">
        Add product
      </button>
    </div>

    <app-product-list #tagProductList></app-product-list>
    <hr/>
    <!-- DOM đến để thay đổi nội dung của thẻ -->
    <div #tagDiv>Nội dung thẻ div</div>
    <button class="btn btn-success" (click)="changeContent()">Thay đổi nội dung</button>

    <!-- ViewChildren DOM đến danh sách các component được lập ra giống query selector all -->

    <hr/>
    <h3>Ôn tập Input Output ViewChild và ViewChildren</h3>
    <!-- <app-bai-tap-dat-ghe></app-bai-tap-dat-ghe> -->
    <app-bai-tap-quan-ly-ghe></app-bai-tap-quan-ly-ghe>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>`,
})
export class PropsComponent implements OnInit {
  product: Product = { id: 0, name: '', img: '', price: 0 };

  //DOM đếm app-product-list
  @ViewChild('tagProductList') tagProductList!: ProductListComponent;
  @ViewChild('tagDiv') tagDiv!:ElementRef;
  constructor() {}
  addProduct(): void {
    this.product.img = `https://picsum.photos/id/${this.product.id}/200/200`;
    //Dùng thuộc tính viewChild để DOM đến tag <app-product-list></app-product-list>
    this.tagProductList.arrProduct.push({ ...this.product });
    console.log(this.product);
  }
  changeContent():void{
    this.tagDiv.nativeElement.innerHTML = 'Nội dung đã bị thay đổi'
  }
  ngOnInit() {}
}

interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
}
