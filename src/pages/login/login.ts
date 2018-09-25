import { Component } from '@angular/core';
import { Router, Route } from '@angular/router';
import { setItem } from '@utils/storage.ts';

@Component({
  selector: 'app-login',
  styleUrls: [ './login.less' ],
  templateUrl: './login.html'
})
export class LoginComponent {
	constructor(private router: Router) {}
	Login(): void {
	    setItem('user', {userId: '123', userName: this.username})
	    this.router.navigate(['/heroes'])
	}
}
