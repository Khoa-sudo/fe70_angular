import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AntdModule } from '../_core/common/_modules/AntdModule/Antd.module';
import { DemoAntdComponent } from './DemoAntd.component';
import { DemoTableComponent } from './DemoTable.component';



@NgModule({
    imports: [CommonModule,FormsModule,AntdModule],
    exports: [DemoAntdComponent,AntdModule],
    declarations: [DemoAntdComponent,DemoTableComponent],
    providers: [],
})
export class DemoAntModule { }
