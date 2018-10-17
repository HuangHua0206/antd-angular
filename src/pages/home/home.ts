import { Component } from '@angular/core';
import { HomeService } from 'api/homeService';
import { getItem } from 'utils/storage';
@Component({
  selector: 'app-home',
  styleUrls: [ './home.less' ],
  templateUrl: './home.html'
})
export class HomeComponent {
	private anyList
	constructor(private homeService: HomeService) {}

	ngOnInit() { 
		if(getItem('user')) this.getData() 		
	}

	async getData() {
		const o = { a: null, b: 'ppp'}
		const resultData = await this.homeService.getHomeList(o)
		this.anyList = resultData.data
	}
}
