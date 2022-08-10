import { useRef, useCallback, useState, useEffect } from "react";
import { Container, CardUl, Title } from "./ColumnContainer.styles";
import { ColumnContainerProps } from "../../../interfaces/index";
import ButtonAddNewItem from "../ButtonAddNewItem";
import Card from "./Card";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import useQueryActions from "../../../customHooks/useQueryActions";
import { MoveTaskAction } from "../../../actions/index";
import { DndTaskType } from "../../../interfaces";

interface IDnDTask {
  task: string;
  listId: string;
}

const ColumnContainer = ({ list, onAddNewCard }: ColumnContainerProps) => {
  const dispatch = useDispatch();

  const { addNewCard, removeCard } = useQueryActions();

  const ref = useRef<any>(null);
  const taskMoving = useSelector<any>((state) => state.action.taskMove.task);

  const [{ isDroped, canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: DndTaskType,
      drop: (item: IDnDTask) => moveTask(item),
      collect: (monitor: any) => ({
        isOver: monitor.isOver(),
        isDroped: monitor.didDrop(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [taskMoving]
  );

  function moveTask(item: IDnDTask) {
    const listIdFrom = item.listId;
    const listIdTo = list._id;

    if (listIdFrom !== listIdTo) {
      removeCard(String(taskMoving), listIdFrom);
      addNewCard(String(taskMoving), listIdTo);
    }
    MoveTaskAction(
      {
        listIdOnDrag: "",
        listIdOnHover: "",
        task: "",
      },
      dispatch
    );
  }

  const handleAddNewCard = (title: string) => {
    onAddNewCard(title, list._id);
  };

  drop(ref);

  return (
    <Container ref={ref} key={list._id}>
      <Title>{list.title}</Title>
      <CardUl>
        {list && list?.tasks
          ? list.tasks.map((task, index) => (
              <Card
                key={index}
                id={String(index)}
                task={task}
                listId={list._id}
              />
            ))
          : null}
      </CardUl>
      <ButtonAddNewItem
        title={`+ Add another card`}
        handleClick={handleAddNewCard}
        darkMode
      />
    </Container>
  );
};

export default ColumnContainer;
