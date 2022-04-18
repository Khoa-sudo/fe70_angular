import { NgModule } from '@angular/core';
import { DataBindingComponent } from './DataBinding.component';
import { OnewayComponent } from './OnewayBinding.component';
import { TwoWayComponent } from './TwowayBinding.component';
import { FormsModule } from '@angular/forms';
import { BTBindingComponent } from './BaiTapBinding.component';


@NgModule({
    exports: [DataBindingComponent],
    declarations: [BTBindingComponent,DataBindingComponent,OnewayComponent,TwoWayComponent],
    imports:[FormsModule]
})
export class DataBindingModule { }
