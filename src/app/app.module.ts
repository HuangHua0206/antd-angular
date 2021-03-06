import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // 浏览器模块
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // 双向数据绑定表单模块
import { AppComponent } from 'app/app.component'; // 根组件
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { AppRoutingModule } from 'app/app-routing.module'; // app模块-路由模块
import { HttpClientModule } from '@angular/common/http';  // http请求模块
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';  // antd相关
import { httpInterceptorProviders } from 'api/base-interceptor'; // http监听
import { AdminModule } from 'admin/admin.module'; // admin模块
import { StoreModule } from '@ngrx/store'; // ngrx模块
import { reducerConfig } from 'ngrx/reducers/index';
import { LoginComponent }  from 'pages/login/login';
registerLocaleData(zh);

@NgModule({
  declarations: [ // 该模块包含的组件和指令有哪些
      LoginComponent,
  		AppComponent
  	],
  imports: [ // 该模块依赖的模块有哪些
    BrowserModule,
    BrowserAnimationsModule,
	  FormsModule,
    NgZorroAntdModule,
	  HttpClientModule,
	  AppRoutingModule,
	  AdminModule,
    StoreModule.forRoot(reducerConfig)
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }, ...httpInterceptorProviders],
  bootstrap: [AppComponent] // 根组件

})
export class AppModule { }
