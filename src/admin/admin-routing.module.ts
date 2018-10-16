import { NgModule }             from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { routes } from 'router/routerRoots'
const config: ExtraOptions = {
  useHash: true,
};

 
@NgModule({
	
    imports: [ 
	    RouterModule.forRoot(routes, config)
    ],
    
    exports: [ RouterModule ]
})
export class AdminRoutingModule {}