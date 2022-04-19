import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PropsComponent } from '../Props/Props.component';
import { LoginComponent } from './BaiTapLogin.component';
import { BaiTapQuanLySanPhamComponent } from './BaiTapQuanLySanPham.component';
import { CardComponent } from './Card.component';
import { DirectiveComponent } from './Directive.component';


//directive phải có CommonModule
//2way phải có FormsModule
@NgModule({
    imports: [CommonModule,FormsModule],
    exports: [DirectiveComponent],
    declarations: [DirectiveComponent,CardComponent,LoginComponent,BaiTapQuanLySanPhamComponent],
    
})
export class DirectiveModule { }
