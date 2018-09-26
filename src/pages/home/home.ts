import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-home',
  styleUrls: [ './home.less' ],
  templateUrl: './home.html'
})
export class HomeComponent {
	 dataSet = [
	    {
	      key    : '1',
	      name   : 'John Brown',
	      age    : 32,
	      address: 'New York No. 1 Lake Park'
	    },
	    {
	      key    : '2',
	      name   : 'Jim Green',
	      age    : 42,
	      address: 'London No. 1 Lake Park'
	    },
	    {
	      key    : '3',
	      name   : 'Joe Black',
	      age    : 32,
	      address: 'Sidney No. 1 Lake Park'
	    }
	  ];
	  public anyList:any
	constructor(private http: HttpClient) {}
	ngOnInit() {  //这个是初始化   
		this.http.get("http://localhost:4200/assets/json/list.json").subscribe(res=>{ this.anyList = res }) 
	}// get方法中接收的是一个接口文件的地址，它会接收接口传递过来的数据，并默认处理为json数据。// subscribe方法是对get接收的数据进行处理。参数 res 就是接收过来的数据对象。然后把 res 对象赋值给anyList变量
 
	test() {
		console.log(this.http)
		const configUrl = 'assets/json/list.json';
	  this.http.get(this.configUrl) 
	  
		// this.http.get('http://localhost:4200/assets/json/list.json').subscribe(res => {})
	}
}
