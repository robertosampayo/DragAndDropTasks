import React, { CSSProperties } from 'react';
import type { XYCoord } from 'react-dnd';
import { useDragLayer } from 'react-dnd';
import { useSelector } from 'react-redux';
import { DndTaskType } from '../../../../interfaces';
import { CardTag } from './Card.styles';

function getItemStyles(
  initialOffset: XYCoord | null,
  currentOffset: XYCoord | null
): CSSProperties {
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none',
    };
  }

  const { x, y } = currentOffset;

  const transform = `translate(${x}px, ${y}px) rotate(350deg)`;
  return {
    position: 'absolute',
    width: '250px',
    transform,
    WebkitTransform: transform,
  };
}

const CardPreview = ({ id = '1' }: { id?: string }) => {
  const taskMoving = useSelector<any>(
    (state) => state.action.taskMove.task
  );

  const { itemType, isDragging, initialOffset, currentOffset } =
    useDragLayer((monitor: any) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
    }));

  function renderItem() {
    switch (itemType) {
      case DndTaskType:
        return (
          <CardTag key={`${taskMoving}-${id}`}>
            {String(taskMoving)}
          </CardTag>
        );
      default:
        return null;
    }
  }

  // eslint-disable-next-line no-extra-boolean-cast
  if (!Boolean(isDragging)) {
    return null;
  }

  return (
    <div style={getItemStyles(initialOffset, currentOffset)}>
      {renderItem()}
    </div>
  );
};

export default CardPreview;
