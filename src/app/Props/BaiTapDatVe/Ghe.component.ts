import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  template: `
    <button
      (click)="datGhe()"
      [disabled]="gheInput.TrangThai"
      [ngClass]="{ gheDaDat: gheInput.TrangThai, gheDangDat: dangChon }"
      class="ghe"
    >
      {{ gheInput.SoGhe }}
    </button>
    <!-- <br *ngIf="gheInput.SoGhe % 4 === 0" /> -->
    <ng-content></ng-content>
  `,
  //scss không ảnh hưởng đến các css của ng khác
  styleUrls: ['./Ghe.scss'],
})
export class GheComponent implements OnInit {
  @Input() gheInput!: Ghe;
  @Output() eDatGhe = new EventEmitter();
  dangChon: boolean = false;
  datGhe(): void {
    this.dangChon = !this.dangChon;
    //Gửi thông tin ghế ra bên ngoài
    this.eDatGhe.emit(this.gheInput);
  }
 
  constructor() {}

  ngOnInit() {}
}
interface Ghe {
  SoGhe: number;
  TenGhe: string;
  Gia: number;
  TrangThai: boolean;
}
