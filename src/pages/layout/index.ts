import { Component, TemplateRef, ViewChild, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { getItem, removeItem } from 'utils/storage';
import { Router, Route } from '@angular/router';
import { filterRoots } from 'router/routerRoots';
import { pagesRoutes } from 'router/router';
@Component({
  selector: 'app-main',
  templateUrl: './index.html',
  styleUrls: ['./index.less']
})
 
export class LayoutComponent implements  OnInit{ 
   username = getItem('user') ? getItem('user').userName : '';
   isCollapsed = false;
   triggerTemplate = null;
   public menus: any = filterRoots(pagesRoutes);
 
  constructor(private router: Router) {}

  // 当用户信息失效或被清除时，退出登录界面
  ngOnInit() { 
  	if(!getItem('user')) this.router.navigate(['/login'])
      console.log(this.router.url)
  }
  
  // 退出登录方法
  logout(): void {
    removeItem('user')
    this.router.navigate(['/login'])
  }
}
