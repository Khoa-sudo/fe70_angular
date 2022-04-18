import { NgModule } from '@angular/core';
import { DataBindingComponent } from './DataBinding.component';
import { OnewayComponent } from './OnewayBinding.component';


@NgModule({
    exports: [DataBindingComponent],
    declarations: [DataBindingComponent,OnewayComponent],
})
export class DataBindingModule { }
