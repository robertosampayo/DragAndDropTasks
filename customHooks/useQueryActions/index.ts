import { gql, useMutation } from "@apollo/client";
import { IList } from "../../interfaces";


export const GET_LISTS_GQL = gql`
  query GetLists {
    lists {
      _id
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

const REMOVE_TASK_GQL = gql`
  mutation DeleteTask($deleteTask: DeleteTask!) {
    deleteTask(input: $deleteTask)
  }
`;



const useQueryActions = () => {

    const [createList] = useMutation<IList>(SAVE_LIST_GQL, {
        refetchQueries: [
        { query: GET_LISTS_GQL },
        ],
    });
    const [createTask,] = useMutation<String[]>(SAVE_TASK_GQL, {
        refetchQueries: [
        { query: GET_LISTS_GQL },
        ],
    });

    const [deleteTask] = useMutation<String[]>(REMOVE_TASK_GQL, {
      refetchQueries: [
      { query: GET_LISTS_GQL },
      ],
  });

    const addNewColumn = (title: string) => {
        createList({ variables: { input: { title: title, tasks: [] } } });
    };

    const addNewCard = async (title: string, listId: string) => {
      try {

        await createTask({
          variables: { createTaskInput: { task: title, idList: listId } },
        });
      } catch (error) {
        console.error(error);
      }
    };

    const removeCard = (task: string, listId: string) => {
      deleteTask({
       variables: { deleteTask: { task: task, idList: listId } },
      });
  };


    return {addNewColumn, addNewCard, removeCard};
  };
  
  export default useQueryActions;