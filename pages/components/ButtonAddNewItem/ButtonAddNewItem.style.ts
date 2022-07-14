import styled from 'styled-components'

interface IButton {
    darkMode: boolean,
}

export const Button = styled.button<IButton>`
    background-color: ${(props) => props.darkMode ? '#ebecf0' : '#ffffff3d' };
    border-radius: 0.5em;
    text-align: left;
    cursor: pointer;
    width: 100%;
    height: 3em;
    border: 0;
    color: ${(props) => props.darkMode ? '#000' : '#fff' };
    padding: ${(props) => props.darkMode ? '0 0 0 0.5em' : '0 0 0 2em' };

`

export const Section = styled.section`
    height: 4em;
    position: relative;
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const Wrapper = styled.div`
    width: 100%;
    position: relative;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-items: flex-start;


    

`