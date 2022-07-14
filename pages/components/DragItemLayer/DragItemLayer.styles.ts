import styled from 'styled-components'

export const CustomDragLayerContainer = styled.div`
  height: 100%;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`
type DragPreviewContainerProps = {
    isHidden?: boolean
    isPreview?: boolean
  }
  
  export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
    transform: ${(props) =>
      props.isPreview ? "rotate(5deg)" : undefined};
    opacity: ${(props) => (props.isHidden ? 0 : 1)};
  `
  
  type DragPreviewWrapperProps = {
    position: {
      x: number
      y: number
    }
  }
  
  export const DragPreviewWrapper = styled.div.attrs<DragPreviewWrapperProps>(
    ({ position: { x, y } }) => ({
      style: {
        transform: `translate(${x}px, ${y}px)`
      }
    })
  )<DragPreviewWrapperProps>``