import { Component } from '@angular/core';
import { HomeService } from '@api/homeService';
@Component({
  selector: 'app-home',
  styleUrls: [ './home.less' ],
  templateUrl: './home.html'
})
export class HomeComponent {
	private anyList
	constructor(private homeService: HomeService) {}

	ngOnInit() {    
		this.getData()	
	}

	async getData() {
		const o = { a: 9, b: 'ppp'}
		const resultData = await this.homeService.getHomeList(o)
		this.anyList = resultData.data
	}
}
