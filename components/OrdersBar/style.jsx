import styled from 'styled-components';
import {Search} from '@styled-icons/evaicons-solid'

const Container = styled.div`
    width: 100vw;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background: rgb(71,9,121);
    background: linear-gradient(90deg, rgba(71,9,121,1) 1%, rgba(61,69,158,1) 50%, rgba(130,168,251,1) 100%);
    button {
        margin-left: 4px;
        height: 28px;
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
        font-weight: 700;
        margin-right: 40px;
    }

    label {
        margin-left: 20px;
        color: white;
        font-size: 18px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input[type="text"]
    {
        font-size:18px;
        padding-left: 4px;
        border: none;
        border-radius: 8px;
        height: 28px;
        margin-left: 6px;
    }
`

const Title = styled.span`

`

const SearchIcon = styled(Search)`
  color: black;
  width: 20px;
  height: 20px;
`


export default Container;
export { Title, SearchIcon}
