import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 双向数据绑定表单模块
import { AdminRoutingModule }     from 'admin/admin-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LayoutComponent }  from 'pages/layout/index';
import { menuComponents } from 'router/router';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [ // 该模块包含的组件和指令有哪些
		LayoutComponent,
		...menuComponents
  	],
  imports: [ // 该模块依赖的模块有哪些
    CommonModule,
	  FormsModule,
    NgZorroAntdModule,
	  AdminRoutingModule
  ]
})
export class AdminModule { }
