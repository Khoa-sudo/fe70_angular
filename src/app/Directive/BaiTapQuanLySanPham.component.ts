import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt-quan-ly-sp',
  template: `<div>
    <div class="card">
      <div class="card-header bg-dark text-white">
        Quản lý danh mục sản phẩm
      </div>
      <div class="card-body">
        <div class="form-group">
          <p>Mã sp</p>
          <input
            type="text"
            class="form-control"
            #maSP
            [(ngModel)]="spInput.maSP"
          />
        </div>
        <div class="form-group">
          <p>Tên sp</p>
          <input
            type="text"
            class="form-control"
            #tenSP
            [(ngModel)]="spInput.tenSP"
          />
        </div>
        <div class="form-group">
          <p>Giá</p>
          <input
            type="text"
            class="form-control"
            #giaSP
            [(ngModel)]="spInput.gia"
          />
        </div>
      </div>
      <div class="card-footer text-center">
        <button class="btn btn-primary" (click)="themSanPham()">
          Thêm Sản Phẩm
        </button>
      </div>
    </div>
    <hr />
    <br />
    <table class="table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Mã SP</th>
          <th>Tên SP</th>
          <th>Giá</th>
        </tr>
      </thead>
      <tbody>  
        <tr [ngClass]="{'bg-dark text-white':(i+1)%2===0}" *ngFor="let item of arrSanPham; let i = index">
          <td>{{ i + 1 }}</td>
          <td>{{ item.maSP }}</td>
          <td>{{ item.tenSP }}</td>
          <td>{{ item.gia }}</td>
        </tr>
      </tbody>
    </table>
  </div>`,
})
export class BaiTapQuanLySanPhamComponent implements OnInit {
  spInput: SanPham = { maSP: '', tenSP: '', gia: 0 };
  arrSanPham: SanPham[] = [];
  themSanPham(): void {
    console.log('spInput', this.spInput);
    this.arrSanPham.push({...this.spInput})
  }
  constructor() {}

  ngOnInit() {}
}
interface SanPham {
  maSP: string;
  tenSP: string;
  gia: number;
}
