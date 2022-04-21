import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';

//Thư viện lodash, tự động sắp xếp
import * as _ from 'lodash';
import { GheComponent } from './Ghe.component';
@Component({
  selector: 'app-bai-tap-dat-ghe',
  template: `<div>
    <h3 class="text display-4 text-center">Bài tập đặt ghế xe buýt</h3>
    <div class="row">
      <div class="col-6 text-center">
        <button class="btn btn-primary w-75">Tài xế</button>
        <div class="danh-sach-ghe mt-3 text-center">
          <app-ghe
            (eDatGhe)="datGhe($event)"
            [gheInput]="ghe"
            *ngFor="let ghe of arrGhe; let index = index"
          >
            <br *ngIf="(index + 1) % 4 === 0" />
          </app-ghe>
        </div>
      </div>
      <div class="col-6 text-center">
        <button class="btn btn-success">Danh sách ghế đã chọn {{this.danhSachGheDangDat.length}}</button>

        <div class="text-center mt-4">
          <p *ngFor="let gheDangDat of danhSachGheDangDat">
            <span>Ghế: </span>
            <span class="text-success"
              >Số {{ gheDangDat.SoGhe }} - {{ gheDangDat.Gia }}
            </span>
            <span
              style="cursor: pointer;color:red"
              (click)="huyGhe(gheDangDat.SoGhe)"
              >[Huỷ]</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>`,
})
export class BaiTapDatGheComponent implements OnInit {
  arrGhe: Ghe[] = [
    { SoGhe: 1, TenGhe: 'số 1', Gia: 100, TrangThai: false },
    { SoGhe: 2, TenGhe: 'số 2', Gia: 100, TrangThai: false },
    { SoGhe: 3, TenGhe: 'số 3', Gia: 100, TrangThai: false },
    { SoGhe: 4, TenGhe: 'số 4', Gia: 100, TrangThai: false },
    { SoGhe: 5, TenGhe: 'số 5', Gia: 100, TrangThai: false },
    { SoGhe: 6, TenGhe: 'số 6', Gia: 100, TrangThai: false },
    { SoGhe: 7, TenGhe: 'số 7', Gia: 100, TrangThai: false },
    { SoGhe: 8, TenGhe: 'số 8', Gia: 100, TrangThai: false },
    { SoGhe: 9, TenGhe: 'số 9', Gia: 100, TrangThai: false },
    { SoGhe: 10, TenGhe: 'số 10', Gia: 100, TrangThai: false },
    { SoGhe: 11, TenGhe: 'số 11', Gia: 100, TrangThai: false },
    { SoGhe: 12, TenGhe: 'số 12', Gia: 100, TrangThai: false },
    { SoGhe: 13, TenGhe: 'số 13', Gia: 100, TrangThai: false },
    { SoGhe: 14, TenGhe: 'số 14', Gia: 100, TrangThai: false },
    { SoGhe: 15, TenGhe: 'số 15', Gia: 100, TrangThai: false },
    { SoGhe: 16, TenGhe: 'số 16', Gia: 100, TrangThai: false },
    { SoGhe: 17, TenGhe: 'số 17', Gia: 100, TrangThai: false },
    { SoGhe: 18, TenGhe: 'số 18', Gia: 100, TrangThai: false },
    { SoGhe: 19, TenGhe: 'số 19', Gia: 100, TrangThai: false },
    { SoGhe: 20, TenGhe: 'số 20', Gia: 100, TrangThai: false },
    { SoGhe: 21, TenGhe: 'số 21', Gia: 100, TrangThai: false },
    { SoGhe: 22, TenGhe: 'số 22', Gia: 100, TrangThai: false },
    { SoGhe: 23, TenGhe: 'số 23', Gia: 100, TrangThai: false },
    { SoGhe: 24, TenGhe: 'số 24', Gia: 100, TrangThai: false },
    { SoGhe: 25, TenGhe: 'số 25', Gia: 100, TrangThai: false },
    { SoGhe: 26, TenGhe: 'số 26', Gia: 100, TrangThai: false },
    { SoGhe: 27, TenGhe: 'số 27', Gia: 100, TrangThai: false },
    { SoGhe: 28, TenGhe: 'số 28', Gia: 100, TrangThai: false },
    { SoGhe: 29, TenGhe: 'số 29', Gia: 100, TrangThai: false },
    { SoGhe: 30, TenGhe: 'số 30', Gia: 100, TrangThai: true },
    { SoGhe: 31, TenGhe: 'số 31', Gia: 100, TrangThai: false },
    { SoGhe: 32, TenGhe: 'số 32', Gia: 100, TrangThai: false },
    { SoGhe: 33, TenGhe: 'số 33', Gia: 100, TrangThai: false },
    { SoGhe: 34, TenGhe: 'số 34', Gia: 100, TrangThai: false },
    { SoGhe: 35, TenGhe: 'số 35', Gia: 100, TrangThai: false },
    { SoGhe: 36, TenGhe: 'số 36', Gia: 100, TrangThai: true },
  ];
  danhSachGheDangDat: Ghe[] = [];
  @ViewChildren(GheComponent) arrGheCom!: QueryList<GheComponent>;

  huyGhe(SoGhe: number): void {
    this.danhSachGheDangDat = this.danhSachGheDangDat.filter(
      (ghe) => ghe.SoGhe !== SoGhe
    );
    this.sapXep();

    //Sau khi huỷ ghế phải xoá màu bên <app-ghe></app-ghe>
    console.log(this.arrGheCom);
    this.arrGheCom.forEach((gheCom: GheComponent, index: number) => {
      if (gheCom.gheInput.SoGhe === SoGhe) {
        gheCom.dangChon = false;
      }
    });
  }
  datGhe(gheClick: Ghe): void {
    console.log('gheClick', gheClick);

    //Mỗi khi click button nếu chưa có trong danhSachGheDangDat thì thêm vào ngược lại thì bỏ ra
    let index = this.danhSachGheDangDat.findIndex(
      (ghe) => ghe.SoGhe === gheClick.SoGhe
    );
    console.log(index);
    if (index !== -1) {
      this.danhSachGheDangDat.splice(index, 1);
    } else {
      this.danhSachGheDangDat.push(gheClick);
    }
    this.sapXep();
  }
  sapXep(): void {
    //Sắp xếp
    this.danhSachGheDangDat = _.orderBy(this.danhSachGheDangDat, ['SoGhe']);
  }
  ngOnInit() {}
}
interface Ghe {
  SoGhe: number;
  TenGhe: string;
  Gia: number;
  TrangThai: boolean;
}
