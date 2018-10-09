import { LoginComponent }  from '@pages/login/login';
import { LayoutComponent }  from '@pages/layout/index';
import { HomeComponent }  from '@pages/home/home';

export const routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'home', 
    component: LayoutComponent,
    children: [
      {path: '', component: HomeComponent}, 
    ]
  },
];

export const COMPONENTS = [
	LoginComponent,
	LayoutComponent,
	HomeComponent
]