import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './Directive.component';


//directive phải có CommonModule
//2way phải có FormsModule
@NgModule({
    imports: [CommonModule,FormsModule],
    exports: [DirectiveComponent],
    declarations: [DirectiveComponent],
    providers: [],
})
export class DirectiveModule { }
