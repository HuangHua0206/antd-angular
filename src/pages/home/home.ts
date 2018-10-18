import { Component } from '@angular/core';
import { HomeService } from 'api/homeService';
import { getItem } from 'utils/storage';
@Component({
  selector: 'app-home',
  styleUrls: [ './home.less' ],
  templateUrl: './home.html'
})
export class HomeComponent {
	private anyList = []
	private pageSize = 15
	private total = 0
	private pageNum = 1
	private loading = false
	constructor(private homeService: HomeService) {}

	ngOnInit() { 
		if(getItem('user')) this.getData() 		
	}

	async getData() {
		const o = { pageNum: this.pageNum - 1, pageSize: this.pageSize,}
		this.loading = true
		const resultData = await this.homeService.getHomeList(o)
		this.loading = false
		this.anyList = resultData.data
		this.total = resultData.total
	}
	currentPageDataChange($event): void {
		console.log($event)
	}
}
