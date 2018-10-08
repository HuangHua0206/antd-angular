import { DashboardComponent }   from '@app/dashboard/dashboard.component';
import { HeroesComponent }      from '@app/heroes/heroes.component';
import { HeroDetailComponent }  from '@app/hero-detail/hero-detail.component';
import { LoginComponent }  from '@pages/login/login';
import { LayoutComponent }  from '@pages/layout/index';
import { HomeComponent }  from '@pages/home/home';

export const routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
  	path: 'heroes', 
  	component: LayoutComponent,
  	children: [
  		{path: '', component: HeroesComponent}, 
  	]
  },
   { 
    path: 'home', 
    component: LayoutComponent,
    children: [
      {path: '', component: HomeComponent}, 
    ]
  },
];

export const COMPONENTS = [
	DashboardComponent,
	HeroesComponent,
	HeroDetailComponent,
	LoginComponent,
	LayoutComponent,
	HomeComponent
]