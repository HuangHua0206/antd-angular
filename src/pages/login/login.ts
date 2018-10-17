import { Component } from '@angular/core';
import { Router, Route } from '@angular/router';
import { setItem } from 'utils/storage';
import { LoginService } from 'api/loginService';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from 'app/tutorial.module';
import { AppState } from 'app/tutorial.state';
import * as TutorialActions from 'app/tutorial.action';

@Component({
  selector: 'app-login',
  styleUrls: [ './login.less' ],
  templateUrl: './login.html'
})
export class LoginComponent {
	username = ''
	password = ''
	// 监听数据状态
    tutorials: Observable<Tutorial[]>;

	constructor(
		private router: Router,
		private loginService: LoginService,
		private store: Store<AppState>
	) {
		this.tutorials = store.select('tutorial');
	}
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
	// 点击用户删除方法
  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index))
  }
  ngOnChanges(){
  	console.log('this.tutorials===>', this.tutorials)
  }
  // 向store派发添加的数据
  addTutorial(name, url) {
  	console.log(name, url)
    this.store.dispatch(new TutorialActions.AddTutorial({ name: name, url: url }))
  }
}
