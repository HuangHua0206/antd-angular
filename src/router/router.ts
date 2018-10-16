/**
 * name:router
 * describe:路由config
 * author: huanghua  2018/9/17
 */
import { filterRoots, filterComponent} from 'router/routerRoots'
import { HomeComponent }  from 'pages/home/home';
import { PageoneComponent }  from 'pages/demos/pageone';
import { PagetwoComponent }  from 'pages/demos/pagetwo';
import { PagethreeComponent }  from 'pages/demos/pagethree';

// 路由在此添加
// 侧边栏路由（单独写考虑layout侧边栏可直接使用此路由数据）
export const pagesRoutes = [
      { path: 'home', component: HomeComponent, roots: ['all'] }, 
      {
        path: 'demo',
        children: [
          { path: '', 
            component: PageoneComponent, 
            roots: [1, 3, 4],
            children: [
              { path: 'page_one', component: PagethreeComponent, roots: ['all'] }
            ] 
          }, 
          { path: 'page_two', component: PagetwoComponent, roots: ['all'] }
        ]
      }
];


