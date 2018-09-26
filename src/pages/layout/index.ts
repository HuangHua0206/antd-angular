import { Component, TemplateRef, ViewChild } from '@angular/core';
import { getItem, removeItem } from '@utils/storage';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './index.html',
  styleUrls: ['./index.less']
})

export class LayoutComponent { 
   username = getItem('user') ? getItem('user').userName : '';
   isCollapsed = false;
   triggerTemplate = null;
   @ViewChild('trigger') customTrigger: TemplateRef<void>;
  constructor(private router: Router) {}
 

  // 当用户信息失效或被清除时，退出登录界面
  ngOnInit() { 
  	if(!getItem('user')) {
  		this.router.navigate(['/login'])
  	}
  }
  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }
  // 退出登录方法
  logout(): void {
    removeItem('user')
    this.router.navigate(['/login'])
  }
}
