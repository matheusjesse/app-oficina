import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`

const Text = styled.span`
    margin-right: 8px;
    font-weight: 100;
`

const Form = styled.form`
    margin-left: 10px;
    margin-right: 10px;
    input {
        margin-left: 4px;
    }
    button {
        margin-left: 4px;
    }
`

export default Container;

export { Text, Form }
