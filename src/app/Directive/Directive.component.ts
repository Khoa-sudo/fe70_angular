import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  template: `<div class="container">
    <h3>Directive</h3>
    <h3>*ngIf</h3>
    <div *ngIf="status">
      <p>Hello {{ useName }}</p>
    </div>
    <!-- mặc định ng-template không hiển thị trên giao diện -->
    <ng-template #divDangNhap>
      <button class="btn btn-danger" (click)="dangNhap()">Đăng nhập</button>
    </ng-template>
    <hr />
    <div class="form-group">
      <p>Nhập vào 1 số</p>
      <input type="text" class="form-control" #so />
      <button class="btn btn-success mt-2" (click)="kiemTraSo(so.value)">
        Kiểm tra số
      </button>
      <div *ngIf="number % 2 === 0" class="alert alert-success mt-2">
        Số chẵn
      </div>
      <div *ngIf="number % 2 !== 0" class="alert alert-warning mt-2">Số lẻ</div>
    </div>
    <!-- <div *ngIf="!status">
      <button class="btn btn-success">Login</button>
    </div> -->

    <hr />
    <h3>*ngSwitchCase</h3>
    <div class="form-group">
      <p>Chọn chức vụ</p>
      <select
        #slChucVu
        [(ngModel)]="maChucVu"
        name=""
        class="form-control"
        id=""
      >
        <option value="1">Giám đốc</option>
        <option value="2">Quản lý</option>
        <option value="3">Nhân viên</option>
      </select>
      <div class="form-group mt-5">
        <div [ngSwitch]="maChucVu">
          <div *ngSwitchCase="'1'" class="alert alert-danger">Giám đốc</div>
          <div *ngSwitchCase="'2'" class="alert alert-primary">Quản lý</div>
          <div *ngSwitchCase="'3'" class="alert alert-success">Nhân viên</div>
          <div *ngSwitchDefault class="alert alert-dark">Mặc định</div>
        </div>
      </div>
    </div>
    <hr />
    <h3>*ngFor</h3>
    <table class="table">
      <thead>
        <tr>
          <th>id</th>
          <th>img</th>
          <th>name</th>
          <th>price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- ng-container thẻ vô hình -->
        <ng-container *ngIf="arrProduct">
          <tr
            [ngClass]="{ 'bg-dark text-white': i % 2 === 0 }"
            *ngFor="let prod of arrProduct; let i = index"
          >
            <td>{{ prod.id }}</td>
            <td><img [src]="prod.img" alt="" width="50" height="50" /></td>
            <td>{{ prod.name }}</td>
            <td>{{ prod.price }}</td>
            <button class="btn btn-danger">Xoá</button>
          </tr>
        </ng-container>
      </tbody>
    </table>
    <hr />
    <h3>Product list</h3>
    <div class="row">
      <div class="col-4" *ngFor="let prod of arrProduct">
        <div class="card">
          <img class="card-img-top" [src]="prod.img" alt="" />
          <div class="card-body">
            <h4 class="card-title">{{ prod.name }}</h4>
            <p class="card-text">{{ prod.price }}</p>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <h3>ng-content</h3>
    <app-card>
      <p class="name">Iphone</p>
      <p class="price">1000</p>
    </app-card>
    <hr />
    <h3>*ngStyle</h3>
    <p [ngStyle]="{ 'font-size': fontSize + 'px' }">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae labore
      vero eveniet, eos voluptates nulla aliquid quisquam maiores, laborum iusto
      velit minima nesciunt provident atque architecto adipisci doloremque dicta
      dolorem?
    </p>
    <button class="btn btn-success mr-2" (click)="changeFontSize(2)">+</button>
    <button class="btn btn-danger mr-2" (click)="changeFontSize(-2)">-</button>
    <hr />
    <h3>Bài tập login</h3>
    <app-login></app-login>
    <hr>
    <h3>Bài Tập 6: Quản lý danh mục sản phẩm</h3>
    <app-bt-quan-ly-sp></app-bt-quan-ly-sp>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>`,
})
export class DirectiveComponent implements OnInit {
  fontSize: number = 17;
  maChucVu: string = '0';
  number: number = 0;
  status: boolean = false;
  useName: string = 'truong@cybersoft';
  dangNhap(): void {
    this.status = true;
  }
  changeFontSize(number: number) {
    this.fontSize += number;
  }
  arrProduct: Product[] = [
    {
      id: '1',
      name: 'Iphone',
      price: 1000,
      img: 'https://i.pravatar.cc?u=5',
    },
    {
      id: '2',
      name: 'Iphone X',
      price: 1200,
      img: 'https://i.pravatar.cc?u=2',
    },
    {
      id: '3',
      name: 'Iphone XS',
      price: 1300,
      img: 'https://i.pravatar.cc?u=3',
    },
  ];

  constructor() {}
  kiemTraSo(kiemSo: string): void {
    this.number = Number(kiemSo);
  }
  ngOnInit() {}
}

interface Product {
  id: string;
  name: string;
  price: number;
  img: string;
}
