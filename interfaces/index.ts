export const DndTaskType = 'task';

export interface IList {
    id: string,
    tasks: string[],
    title: string,
}

export interface ColumnContainerProps {
   list: IList,
   onAddNewCard: (title: string, listId: string) => void;
}


export interface IListsState {
    data: {
        lists: IList[]
    }
  }

export interface IMoveTask {
  listIdOnDrag: string,
  listIdOnHover: string,
  task: string

}

export interface IMoveState {
  action: {
    taskMove: IMoveTask
  }
}


  // Reducer 

export interface ISaveList {
    type: "SAVE_LIST"; payload: IList
  }
  
export interface ISaveTaskInList {
    type: "SAVE_TASK_IN_LIST"; payload: string
  }

export interface ISaveLists {
  type: "SAVE_LISTS"; payload: IListsState
}

export interface IMoveTaskPayload {
  type: "MOVE_TASK"; payload: IMoveTask
}

/*export interface IMoveList {
  type: "MOVE_List"; payload: IListsState
}*/