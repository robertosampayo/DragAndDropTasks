import styled from 'styled-components'

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -4.5em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
`

export const FormInput = styled.input`

    border-radius: 0.5em;
    border: 0;
    margin-bottom: 0.5em;
    height: 2em;
    padding: 0 0 0 2em;
    
    &:active {
        border: 0;
    }
`
export const CreateButton = styled.button`

    background: #26b226;
    border: 0;
    border-radius: 0.3em;
    height: 2em;
    width: 50%;
    color: #fff;
    cursor: pointer;


`