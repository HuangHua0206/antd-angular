import { Component } from '@angular/core';
import { HomeService } from 'api/homeService';
import { Store } from '@ngrx/store';
import { AppState } from 'app/tutorial.state';
import * as TutorialActions from 'app/tutorial.action';
import { getItem } from 'utils/storage';
@Component({
  selector: 'app-home',
  styleUrls: [ './home.less' ],
  templateUrl: './home.html'
})
export class HomeComponent {
	private anyList
	constructor(private homeService: HomeService,
		private store: Store<AppState>) {}

	ngOnInit() { 
		if(getItem('user')) this.getData() 		
	}

	async getData() {
		const o = { a: null, b: 'ppp'}
		const resultData = await this.homeService.getHomeList(o)
		this.anyList = resultData.data
	}
	// 向store派发添加的数据
  addTutorial(name, url) {
  	console.log(name, url)
    this.store.dispatch(new TutorialActions.AddTutorial({ name: name, url: url }))
  }
}
