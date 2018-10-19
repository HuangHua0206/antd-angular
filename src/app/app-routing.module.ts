import { NgModule }             from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LoginComponent }  from 'pages/login/login'; 
const config: ExtraOptions = {
  useHash: true,
};
export const routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/pages/home', pathMatch: 'full' }, 
  { path: 'pages', loadChildren: 'admin/admin.module#AdminModule' },
];
 
@NgModule({
	
    imports: [ 
	    RouterModule.forRoot(routes, config)
    ],
    
    exports: [ RouterModule ]
})
export class AppRoutingModule {}