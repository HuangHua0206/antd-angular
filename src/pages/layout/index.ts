import { Component, TemplateRef, ViewChild, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { getItem, removeItem } from 'utils/storage';
import { Router, Route } from '@angular/router';
import { menus } from './sideConfig';

@Component({
  selector: 'app-main',
  templateUrl: './index.html',
  styleUrls: ['./index.less']
})
 
export class LayoutComponent implements  OnInit{ 
   username = getItem('user') ? getItem('user').userName : '';
   isCollapsed = false;
   triggerTemplate = null;
   public menus: any = menus;
 
  constructor(private router: Router) {}

  // 当用户信息失效或被清除时，退出登录界面
  ngOnInit() { 
  	if(!getItem('user')) this.router.navigate(['/login'])
  }
  
  // 退出登录方法
  logout(): void {
    removeItem('user')
    this.router.navigate(['/login'])
  }
}
