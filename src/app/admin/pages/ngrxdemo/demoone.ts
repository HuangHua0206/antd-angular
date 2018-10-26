import { Component } from '@angular/core';
import { AppState } from 'ngrx/states/states';
import { Store } from '@ngrx/store';
import { Demos } from 'ngrx/states/models';
import { Observable } from 'rxjs';
import * as DemoActions from 'ngrx/actions/demo.action'
@Component({
	templateUrl: './demoone.html'
})
export class DemooneComponent {
	name: string
	age: number
	// 监听数据状态
    demos: Observable<Demos[]>;
	constructor(private store: Store<AppState>) {
		this.demos = store.select('demos');
		console.log(store.select('tutorial'), 'store')
	}
	addPerson() {
		this.store.dispatch(new DemoActions.AddDemo({name: this.name, age: this.age}));
	}
}