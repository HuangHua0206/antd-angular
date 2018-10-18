/**
 * name:router
 * describe:路由config
 * author: huanghua  2018/9/17
 */
import { filterRoots, filterComponent } from 'router/routerRoots';
import { HomeComponent }  from 'pages/home/home';
import { PageoneComponent }  from 'pages/demos/pageone';
import { PagetwoComponent }  from 'pages/demos/pagetwo';
import { PagethreeComponent }  from 'pages/demos/pagethree';
import { DemooneComponent } from 'pages/ngrxdemo/demoone';
import { DemotwoComponent } from 'pages/ngrxdemo/demotwo';
// 路由在此添加
// 侧边栏路由（单独写考虑layout侧边栏可直接使用此路由数据）
const pagesRoutes = [
  { path: 'home', component: HomeComponent, roots: ['all'], title: 'Home', icon: 'appstore' }, 
  {
    path: 'demo',
    title: '父子组件',
    icon: 'file',
    children: [
      { path: 'page_one', component: PageoneComponent, roots: [1, 2, 3], title: '页面1' }, 
      { path: 'page_two', component: PagetwoComponent, roots: [3], title: '页面2' },
      { path: 'page_three', component: PagethreeComponent, roots: ['all'], title: '页面3' }
    ]
  },
  {
    path: 'ngrx',
    title: 'Ngrx页面',
    icon: 'file',
    children: [
      { path: 'page_one', component: DemooneComponent, roots: [1, 2, 3], title: 'ngrx1' },
      { path: 'page_two', component: DemotwoComponent, roots: [1, 2, 3], title: 'ngrx2' }
    ]
  }
];


// 导出权限过滤后的路由和components
export const menuRoutes = filterRoots(pagesRoutes)
export const menuComponents = filterComponent(menuRoutes)
