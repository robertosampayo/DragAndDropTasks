import { useDragLayer } from "react-dnd";
import {
  CustomDragLayerContainer,
  DragPreviewWrapper,
} from "./DragItemLayer.styles";
import Card from "../ColumnContainer/Card";
import { useSelector } from "react-redux";
import { IMoveState } from "../../../interfaces";

export const DragItemLayer = () => {
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getSourceClientOffset(),
  }));

  const taskMove = useSelector((state: IMoveState) => state.action.taskMove);
  console.log(taskMove);
  return currentOffset ? (
    <CustomDragLayerContainer>
      <DragPreviewWrapper position={currentOffset}>
        <Card task={"task"} id={"0"} listId={"0"} />
      </DragPreviewWrapper>
    </CustomDragLayerContainer>
  ) : null;
};
