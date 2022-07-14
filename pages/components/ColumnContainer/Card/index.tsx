import React, { useEffect, useRef, useState, CSSProperties } from "react";
import { useDrop, useDrag, DragSourceMonitor } from "react-dnd";
import { CardTag } from "./Card.styles";
import { useDispatch } from "react-redux";
import { MoveTaskAction } from "../../../../actions/index";
import { DndTaskType } from "../../../../interfaces";
import { getEmptyImage } from "react-dnd-html5-backend";

const Card = ({
  task,
  id,
  listId,
}: {
  task: string;
  id: string;
  listId: string;
}) => {
  const ref = useRef<any>(null);
  const dispatch = useDispatch();

  const [, drop] = useDrop(() => ({
    accept: DndTaskType,
  }));

  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: "task",
    item: { task: task, listId: listId },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  useEffect(() => {
    if (isDragging) {
      MoveTaskAction(
        {
          listIdOnDrag: "",
          listIdOnHover: "",
          task: task,
        },
        dispatch
      );
    }
  }, [isDragging]);

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  drop(drag(ref));

  return (
    <>
      <CardTag
        ref={ref}
        style={{
          opacity: isDragging ? 0 : 1,
          cursor: "move",
        }}
        key={`${task}-${id}`}
      >
        {task}
      </CardTag>
    </>
  );
};

export default Card;
