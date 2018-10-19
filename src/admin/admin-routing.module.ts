import { NgModule }             from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { menuRoutes } from 'router/router'
import { LayoutComponent }  from 'pages/layout/index';
 
// admin路由框架
export const routes = [
  { 
    path: '', 
    component: LayoutComponent,
    children: menuRoutes || []
  }
]

 
@NgModule({
	
    imports: [ 
	    RouterModule.forChild(routes)
    ],
    
    exports: [ RouterModule ]
})
export class AdminRoutingModule {}