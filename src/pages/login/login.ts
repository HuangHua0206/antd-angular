import { Component } from '@angular/core';
import { Router, Route } from '@angular/router';
import { setItem } from 'utils/storage';
import { LoginService } from 'api/loginService';

@Component({
  selector: 'app-login',
  styleUrls: [ './login.less' ],
  templateUrl: './login.html'
})
export class LoginComponent {
	username = ''
	password = ''
	constructor(
		private router: Router,
		private loginService: LoginService
	) { }
	async Login() {
		const o = {
      		mobile: "13627140650",
			openId: null,
			password: "19920206hua",
			verifyCode: "fgih",
			verifyCodeKey: "153897937374418194842"
      	}
		const resultData =  await this.loginService.login(o)  

        console.log('resultData==>', resultData)
	    setItem('user', {userId: '123', userName: this.username, token: resultData.data.token, role: resultData.data.role}, false)
	    this.router.navigate(['/pages/home'])
	}
}
