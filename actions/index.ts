import { ISaveList, IListsState, IMoveTask } from '../interfaces' 
import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { useQuery, gql, useMutation } from "@apollo/client";
import { IList } from "../interfaces";

export const GET_LISTS_GQL = gql`
  query GetLists {
    lists {
      id
      title
      tasks
    }
  }
`;

const SAVE_LIST_GQL = gql`
  mutation CreateList($input: CreateListInput!) {
    createList(input: $input) {
      title
      tasks
    }
  }
`;

const SAVE_TASK_GQL = gql`
  mutation CreateTask($createTaskInput: CreateTask!) {
    createTask(input: $createTaskInput)
  }
`;


export const SAVE_LIST = 'SAVE_LIST';
export const SAVE_LISTS = 'SAVE_LISTS';
export const SAVE_TASK_IN_LIST = 'SAVE_TASK_IN_LIST';
export const MOVE_LIST = 'MOVE_LIST';
export const MOVE_TASK = 'MOVE_TASK';
export const DROP_TASK = 'DROP_TASK';


export const SaveListAction = (payload: ISaveList, dispatch: Dispatch<AnyAction>) => {
    dispatch({ type: SAVE_LIST, payload:  payload})
}

export const SaveListsAction = (payload: IListsState, dispatch: Dispatch<AnyAction>) => {
    dispatch({ type: SAVE_LISTS, payload:  payload})
}

export const MoveTaskAction = (payload: IMoveTask, dispatch: Dispatch<AnyAction>) => {
    dispatch({ type: MOVE_TASK, payload:  payload})
}

