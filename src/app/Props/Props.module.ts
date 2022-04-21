import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaiTapDatGheComponent } from './BaiTapDatVe/BaiTapDatVe.component';
import { BaiTapQuanLyGheComponent } from './BaiTapDatVe/BaiTapQuanLyGhe.component';
import { GheComponent } from './BaiTapDatVe/Ghe.component';
import { ProductItemComponent } from './DemoInput/ProductItem.component';
import { ProductListComponent } from './DemoInput/ProductList.component';
import { PropsComponent } from './Props.component';



@NgModule({
    imports: [FormsModule,CommonModule],
    exports: [PropsComponent],
    declarations: [PropsComponent,ProductItemComponent,ProductListComponent,GheComponent,BaiTapDatGheComponent,BaiTapQuanLyGheComponent],
    
})
export class PropsModule { }
