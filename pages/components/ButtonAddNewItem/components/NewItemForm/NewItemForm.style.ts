import styled from 'styled-components'

interface IButton {
    create?: boolean,
}

export const Section = styled.section`
    width: 100%;
    height: 5em;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -4.5em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    top: 0;
    
`

export const FormInput = styled.input`

    border-radius: 0.5em;
    border: 0;
    margin-bottom: 0.5em;
    height: 2em;
    padding: 0 0 0 2em;
    width:100%;
    
    &:active {
        border: 0;
    }
`
export const Button = styled.button<IButton>`

    background: ${(props) => props.create ? '#26b226' : 'gray'};
    border: 0;
    border-radius: 0.3em;
    height: 2em;
    width: 8em;
    color: #fff;
    cursor: pointer;
    margin-right: 1em;


`

export const ButtonsContainer = styled.div`

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;


`


