import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgb(71,9,121);
    background: linear-gradient(90deg, rgba(71,9,121,1) 1%, rgba(61,69,158,1) 50%, rgba(130,168,251,1) 100%);
    button {
        margin-left: 4px;
        height: 30px;
        border-radius: 8px;
        cursor: pointer;
        border: none;
        background-color: white;
        font-size: 18px;
        color: #242424;
    }

    button:hover {
        margin-left: 4px;
        height: 30px;
        border-radius: 8px;
        cursor: pointer;
        border: none;
        background-color: white;
        font-size: 18px;
        color: #242424;
        box-shadow: 0px 0px 5px #37B3CB;        
    }

    span {
        color: white;
        font-size: 22px;
        margin-right: 4px;
    }

    .navMain {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .navHome {
        border-bottom: 2px solid white;
        font-size: 24px;
        font-weight: 600;
    }
`

const Text = styled.span`
    margin-right: 8px;
    font-size: 38px;
    font-weight: 700;
    color: white;
`

const Form = styled.form`
    margin-left: 10px;
    margin-right: 10px;
    height: 30px;
    input {
        margin-left: 4px;
        border-radius: 8px;
        height: 30px;
        border: none;
    }

    input[type="text"]
    {
        font-size:18px;
        padding-left: 4px;
    }

    button {
        margin-left: 4px;
        height: 30px;
        border-radius: 8px;        
        border: none;
        cursor: pointer;
    }
    label {
        margin-left: 20px;
        color: white;
        font-size: 22px;
        height: 30px;
    }
`

export default Container;

export { Text, Form }
