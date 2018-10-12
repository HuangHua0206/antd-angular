import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // 双向数据绑定表单模块
import zh from '@angular/common/locales/zh';
import { AdminRoutingModule }     from '@admin/admin-routing.module';
import { HttpClientModule } from '@angular/common/http';  // http请求模块
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { httpInterceptorProviders } from '@api/base-interceptor';
import { COMPONENTS } from '@router/router'

@NgModule({
  declarations: [ // 该模块包含的组件和指令有哪些
		...COMPONENTS
  	],
  imports: [ // 该模块依赖的模块有哪些
    BrowserAnimationsModule,
	  FormsModule,
    NgZorroAntdModule,
	  HttpClientModule,
	  AdminRoutingModule,
  ],
  providers: [...httpInterceptorProviders],
})
export class AdminModule { }
