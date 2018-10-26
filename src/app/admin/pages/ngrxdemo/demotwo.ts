import { Component } from '@angular/core';
import { AppState } from 'ngrx/states/states';
import { Store } from '@ngrx/store';
import { Demos } from 'ngrx/states/models';
import { Observable } from 'rxjs';
@Component({
	templateUrl: './demotwo.html'
})
export class DemotwoComponent {
	// 监听数据状态
    demos: Observable<Demos[]>;
    constructor(private store: Store<AppState>) {
		this.demos = store.select('demos');
	}
}