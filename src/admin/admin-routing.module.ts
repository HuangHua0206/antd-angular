import { NgModule }             from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { menuRoutes } from 'router/router'
import { LayoutComponent }  from 'pages/layout/index';
const config: ExtraOptions = {
  useHash: true,
};
// admin路由框架
export const routes = [
  { path: '', redirectTo: '/pages/home', pathMatch: 'full' }, 
  { 
    path: 'pages', 
    component: LayoutComponent,
    children: menuRoutes || []
  }
]

 
@NgModule({
	
    imports: [ 
	    RouterModule.forRoot(routes, config)
    ],
    
    exports: [ RouterModule ]
})
export class AdminRoutingModule {}