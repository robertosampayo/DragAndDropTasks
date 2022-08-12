import styled from 'styled-components';

type DragPreviewContainerProps = {
    isHidden?: boolean
    isPreview?: boolean
  }

  type DragPreviewWrapperProps = {
    position: {
      x: number
      y: number
    }
  }
export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
  transform: ${(props) =>
    props.isPreview === true ? 'rotate(5deg)' : undefined};
  opacity: ${(props) => (props.isHidden === true ? 0 : 1)};
`


export const CardTag = styled.li`

    background: #fff;
    border-radius: 0.5em;
    height: 2em;
    padding: 0.3em 0.3em 0.3em 1em;
    box-shadow: 0px 0px 5px -4px #000000;
    list-style-type: none;
    margin-bottom: 0.8em;
`

export const CustomDragLayerContainer = styled.div`
  height: 100%;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`
export const CardTagPreviewWrapper = styled.div.attrs<DragPreviewWrapperProps>(
    ({ position: { x, y } }) => ({
      style: {
        transform: `translate(${x}px, ${y}px)`
      }
    })
  )<DragPreviewWrapperProps>``