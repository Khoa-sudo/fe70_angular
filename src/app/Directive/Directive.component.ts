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
      <select #slChucVu [(ngModel)]="maChucVu" name="" class="form-control" id="">          
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
  </div>`,
})
export class DirectiveComponent implements OnInit {
  maChucVu: string = '0';
  number: number = 0;
  status: boolean = false;
  useName: string = 'truong@cybersoft';
  dangNhap(): void {
    this.status = true;
  }
  constructor() {}
  kiemTraSo(kiemSo: string): void {
    this.number = Number(kiemSo);
  }
  ngOnInit() {}
}
