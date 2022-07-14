import { SAVE_LISTS } from "../actions";
import { ISaveList, ISaveTaskInList, ISaveLists } from '../interfaces/index';



// cada reducer tiene su propio state
const initialState = {
  lists: [],
};



type Action = ISaveList | ISaveTaskInList | ISaveLists;

export default function (state = initialState, action: Action) {
  switch (action.type) {

    case SAVE_LISTS:
      return {
        lists: [ ... action.payload.data.lists ]
      };


    default:
      return state;
  }
}
