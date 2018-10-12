import { Action } from '@ngrx/store'
import { Tutorial } from './tutorial.module'

export const ADD_TUTORIAL = '[TUTORIAL] add';
export const REMOVE_TUTORIAL = '[TUTORIAL] remove';

export class AddTutorial implements Action {
  readonly type = ADD_TUTORIAL;
  constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
  readonly type = REMOVE_TUTORIAL;
  constructor(public payload: number) {}
}

export type TutorialActions = AddTutorial | RemoveTutorial;