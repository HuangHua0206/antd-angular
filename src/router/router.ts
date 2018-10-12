/**
 * name:http服务
 * describe:路由
 * author: huanghua  2018/9/17
 */
import { LoginComponent }  from '@pages/login/login';
import { LayoutComponent }  from '@pages/layout/index';
import { HomeComponent }  from '@pages/home/home';
import { PageoneComponent }  from '@pages/demos/pageone';
import { PagetwoComponent }  from '@pages/demos/pagetwo';
import { PagethreeComponent }  from '@pages/demos/pagethree';
// 角色类型
const roles = {
  'r1': 'superadmin', // 超级管理员
  'r2': 'admin', // 管理员
  'r3': 'superreviewer', // 资深审核员
  'r4': 'reviewer', // 审核员
  'r5': 'viewer' // 查看者
}

// 显示名称
const roleNames = {
  'superadmin': '超级管理员',
  'admin': '管理员',
  'superreviewer': '资深审核员',
  'reviewer': '审核员',
  'viewer': '查看者',
  'test': '测试者',
  'normal': '访问者'
}

export const routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', roots: [] },
  { 
    path: 'home', 
    component: LayoutComponent,
    children: [
      {path: '', component: HomeComponent}, 
    ]
  },
  { 
    path: 'page_one', 
    component: LayoutComponent,
    children: [
      {path: '', component: PageoneComponent}, 
    ]
  },
  { 
    path: 'page_two', 
    component: LayoutComponent,
    children: [
      {path: '', component: PagetwoComponent}, 
    ]
  },
  { 
    path: 'page_three', 
    component: LayoutComponent,
    children: [
      {path: '', component: PagethreeComponent}, 
    ]
  },
];

export const COMPONENTS = [
	LoginComponent,
	LayoutComponent,
	HomeComponent,
  PageoneComponent,
  PagetwoComponent,
  PagethreeComponent
]