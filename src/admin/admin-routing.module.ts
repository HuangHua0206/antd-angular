import { NgModule }             from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { pagesRoutes } from 'router/router'
import { filterRoots, filterComponent } from 'router/routerRoots'
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
    children: filterRoots(pagesRoutes) || []
  }
]

 
@NgModule({
	
    imports: [ 
	    RouterModule.forRoot(routes, config)
    ],
    
    exports: [ RouterModule ]
})
export class AdminRoutingModule {}