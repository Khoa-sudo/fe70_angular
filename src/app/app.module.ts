import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaiTapLayoutModule } from './Components/BaiTapLayout/BaiTapLayout.module';
import { DemoComponent } from './Components/Demo/Demo.component';
import { DataBindingModule } from './Databinding/DataBinding.module';
import { DirectiveModule } from './Directive/Directive.module';
import { HeaderComponent } from './header/header.component';
import { PropsModule } from './Props/Props.module';

@NgModule({
  declarations: [
    //Nơi chứa thẻ component
    AppComponent,
    HeaderComponent, 
    DemoComponent,
  ],
  imports: [
    //Nơi chứa các module khác muốn sử dụng cho module này
    BrowserModule, 
    AppRoutingModule,
    BaiTapLayoutModule, //module
    DataBindingModule,
    DirectiveModule,
    PropsModule
    //imports không imp dc component
    //exports thì dc component và cả module
  ],
  providers: [],//Nơi import các service
  bootstrap: [AppComponent] //Các thẻ component muốn sử dụng được trong index.html
})
export class AppModule { }
