import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductItemComponent } from './DemoInput/ProductItem.component';
import { ProductListComponent } from './DemoInput/ProductList.component';
import { PropsComponent } from './Props.component';



@NgModule({
    imports: [FormsModule,CommonModule],
    exports: [PropsComponent],
    declarations: [PropsComponent,ProductItemComponent,ProductListComponent],
    
})
export class PropsModule { }
