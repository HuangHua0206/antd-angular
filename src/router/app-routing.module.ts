import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from '../app/heroes/heroes.component';
import { HeroDetailComponent }      from '../app/hero-detail/hero-detail.component';
import { DashboardComponent }   from '../app/dashboard/dashboard.component';
import { LoginComponent }   from '../pages/login/login.component';

// 定义常量 嵌套自路由
const appChildRoutes: Routes = [
 {path: "heroes", component: HeroesComponent},
 {path: "detail", component: HeroDetailComponent},
 // 如果地址栏中输入没有定义的路由就跳转到one路由界面
 // {
 //  path: '**', redirectTo: "home"
 // }
]
// 定义常量 路由
const appRoutes:Routes = [
 {path: '', redirectTo: '/home',  pathMatch: 'full'},
 {path: 'login', component: LoginComponent },
 {
  path: 'home',
  component: DashboardComponent,
  children: appChildRoutes
}
]
@NgModule({
	imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})


export class AppRoutingModule { }
