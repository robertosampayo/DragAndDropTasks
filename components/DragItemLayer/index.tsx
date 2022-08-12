import { useDragLayer } from 'react-dnd';
import Card from '../ColumnContainer/Card';
import {
  CustomDragLayerContainer,
  DragPreviewWrapper,
} from './DragItemLayer.styles';

export const DragItemLayer = () => {
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getSourceClientOffset(),
  }));

  return currentOffset ? (
    <CustomDragLayerContainer>
      <DragPreviewWrapper position={currentOffset}>
        <Card task={'task'} id={'0'} listId={'0'} />
      </DragPreviewWrapper>
    </CustomDragLayerContainer>
  ) : null;
};
