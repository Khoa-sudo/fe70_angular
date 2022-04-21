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
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoAntModule } from './DemoAntd/DemoAntd.module';

registerLocaleData(en);

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
    PropsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoAntModule
    //imports không imp dc component
    //exports thì dc component và cả module
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],//Nơi import các service
  bootstrap: [AppComponent] //Các thẻ component muốn sử dụng được trong index.html
})
export class AppModule { }
