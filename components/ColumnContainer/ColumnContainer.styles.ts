import styled from 'styled-components'



type DragPreviewWrapperProps = {
    position: {
      x: number
      y: number
    }
  }

export const Container = styled.div`

    display: flex;
    background-color: #ebecf0;
    flex-direction: column;
    width: 20em;
    height: max-content;
    border-radius: 0.5em;
    padding: 0.5em;
    margin: 0 1em 0 0;

    word-wrap: break-word;
    word-break: break-word;
    hyphens: auto;
`

export const CardUl = styled.ul`

    padding: 0;
`

export const Title = styled.h1`
    padding: 0 0 0 0.5em;
    font-size: 1.2em;
    white-space: pre-wrap;
`

  
export const DragPreviewWrapper = styled.div.attrs<DragPreviewWrapperProps>(
({ position: { x, y } }) => ({
    style: {
    transform: `translate(${x}px, ${y}px)`
    }
})
)<DragPreviewWrapperProps>``