import { Tutorial } from './tutorial.module'
import * as TutorialActions from './tutorial.action'

// 初始化数据值
const initialState: Tutorial = {
  name: 'seebin',
  url: 'http://blog.seebin.com'
}

// 累计器
export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.TutorialActions) {
  console.log('reducer>state:', state)
  console.log('reducer>action:', action)
  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];

    case TutorialActions.REMOVE_TUTORIAL:
      state.splice(action.payload, 1)
      return state;

    default:
      return state;
  }
}