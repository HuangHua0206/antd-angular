import { Component } from '@angular/core';
import { Router, Route } from '@angular/router';
import { setItem } from '@utils/storage';

@Component({
  selector: 'app-login',
  styleUrls: [ './login.less' ],
  templateUrl: './login.html'
})
export class LoginComponent {
	username = ''
	password = ''
	constructor(private router: Router) {}
	Login(): void {
	    setItem('user', {userId: '123', userName: this.username}, false)
	    this.router.navigate(['/heroes'])
	}
}
