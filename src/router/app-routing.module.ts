import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
// 表单 双向数据绑定
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { DashboardComponent }   from '@app/dashboard/dashboard.component';
import { HeroesComponent }      from '@app/heroes/heroes.component';
import { HeroDetailComponent }  from '@app/hero-detail/hero-detail.component';
import { LoginComponent }  from '@pages/login/login';
import { LayoutComponent }  from '@pages/layout/index';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
  	path: 'heroes', 
  	component: LayoutComponent,
  	children: [
  		{path: '', component: HeroesComponent}, 
  	]
  },
];
 
@NgModule({
	declarations: [
		LoginComponent,
		LayoutComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
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