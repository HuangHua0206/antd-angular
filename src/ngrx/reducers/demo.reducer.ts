import { Demos } from 'ngrx/states/models'
import * as DemoActions from 'ngrx/actions/demo.action'

// 初始化数据值
const initialState: Demos = {
  name: 'Huanghua',
  age: 26
}

export default function reducer(state: Demos[] = [initialState], action ) {
  	switch(action.type) {
  		case DemoActions.ADD_DEMO:
  			return [action.payload, ...state]
  		case DemoActions.DELETE_DEMO:
  			state.splice(action.payload, 1)
  			return state
  		default: 
  			return state
  	}
}