import { Action } from '@ngrx/store';
import { Demos } from 'ngrx/states/models';

export const ADD_DEMO = 'ADD_DEMO';
export const DELETE_DEMO = 'DELETE_DEMO';

export class AddDemo implements Action {
	readonly type = ADD_DEMO;
	constructor(public payload: Demos) {}
}

export class DeleteDemo implements Action {
	readonly type = DELETE_DEMO;
	constructor(public payload: number) {}
}

export type DemoActions = AddDemo | DeleteDemo;