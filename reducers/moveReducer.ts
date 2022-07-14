import { MOVE_TASK, DROP_TASK } from "../actions";
import { IMoveTask, IMoveTaskPayload } from '../interfaces/index';



// cada reducer tiene su propio state
const initialState = {
    taskMove: {
      listIdOnDrag: '',
      listIdOnHover: '',
      task: ''

    },
};



type Action = IMoveTaskPayload;

export default function (state = initialState, action: Action) {
  switch (action.type) {

    case MOVE_TASK:
      return { ... state, taskMove: action.payload };

    default:
      return state;
  }
}
