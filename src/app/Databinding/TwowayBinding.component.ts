import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway',
  template: `<div>
    <h3>Two way binding</h3>
    <p>Mentor: {{ name }}</p>
    <input
      #tagInputName
      type="text"
      class="w-25 form-control"
      (keyup)="changeName(tagInputName.value)"
    />
    <br />
    <p>2 way binding</p>

    <input class="w-25 form-control" [(ngModel)]="name" />
    <hr />
    <div class="d-flex">
      <div class="card text-white bg-primary w-100">
        <img class="card-img-top" src="{{ product.img }}" alt="" />
        <div class="card-body">
          <p class="card-text">{{product.name}}</p>
          <p class="card-text">{{product.price}}</p>
          <button class="btn bg-dark text-white">Submit</button>
        </div>
      </div>
      <div class="w-100 ml-5">
        <div class="form-group">
          <p>id</p>
          <input class="form-control" #id [(ngModel)]="product.id"/>
        </div>
        <div class="form-group mt-5">
          <p>name</p>
          <input class="form-control" #name1 [(ngModel)]="product.name"/>
        </div>
        <div class="form-group mt-5">
          <p>price</p>
          <input class="form-control" #price [(ngModel)]="product.price"/>
        </div>
        <div class="form-group mt-5">
          <p>image</p>
          <input class="form-control" #img [(ngModel)]="product.img"/>
        </div>
        <button class="btn btn-success mt-5" (click)="changeProduct(id.value,name1.value,price.value,img.value)">
          Update
        </button>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>`,
})
export class TwoWayComponent implements OnInit {
  product: Product = {
    id: 1,
    name: 'Iphone',
    price: 1000,
    img: 'https://picsum.photos/id/20/1000',
  };
  name: string = 'Tô Trường Hải';
  constructor() {}
  changeName(name: string): void {
    this.name = name;
  }
  changeProduct(id: string, name: string, price: string, img: string): void {
    this.product.id = Number(id);
    this.product.name = name;
    this.product.price = Number(price);
    this.product.img = img;
  }
  ngOnInit() {}
}

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}
