import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
// 表单 双向数据绑定
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { COMPONENTS, routes } from '@router/router'

 
@NgModule({
	declarations: [
		...COMPONENTS
  	],
    imports: [ 
    	BrowserModule,
	    BrowserAnimationsModule,
	    FormsModule,
	    HttpClientModule,
	    NgZorroAntdModule,
	    RouterModule.forRoot(routes)
    ],
    providers: [{ provide: NZ_I18N, useValue: zh_CN }],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}