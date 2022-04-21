import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDividerModule } from 'ng-zorro-antd/divider';
@NgModule({
  imports: [
    NzButtonModule,
    NzIconModule,
    NzCascaderModule,
    NzTableModule,
    NzBadgeModule,
    NzDropDownModule,
    NzDividerModule,
  ],
  exports: [
    NzButtonModule,
    NzIconModule,
    NzCascaderModule,
    NzTableModule,
    NzBadgeModule,
    NzDropDownModule,
    NzDividerModule,
  ],
})
export class AntdModule {}
