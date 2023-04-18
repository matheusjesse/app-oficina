import styled from "styled-components";
import {Car} from '@styled-icons/boxicons-regular'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    margin-top: 38px;
    th {
        text-align: start;
        width: 148px;
    }

    table {
        background: rgb(71,9,121);
        background: linear-gradient(90deg, rgba(71,9,121,1) 1%, rgba(61,69,158,1) 50%, rgba(130,168,251,1) 100%);   
        color: white;
        border-radius: 12px;
        padding: 8px;
        border-spacing: 0;
    }

    td {
        border-top: 1px solid white;
        height: 40px;
    }

    td button {
        border: none;
        height: 28px;
        color: black;
        background-color: white;
        border-radius: 6px;
        font-weight: 700;
        cursor: pointer;
    }

    .emptySearch {
        display: flex;
        flex-wrap: wrap;
        height: 400px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 30px;
        color: #b6b6b6;
    }
`

const CarIcon = styled(Car)`
  color: #b6b6b6;
  width: 100px;
  height: 100px;
`

const ClientPersonalInfo = styled.div`
    width: 228px;
    height: 188px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    margin-right: 18px;
    img {
        width: 108px;
        height: 108px;
    }

    span {
        color: white;
        font-size: 18px;
        font-weight: 700;
        margin-top: 4px;
    }

    ::before {
      content: "";
      position: absolute;
      background: rgb(71,9,121);
      background: linear-gradient(90deg, rgba(71,9,121,1) 1%, rgba(61,69,158,1) 50%, rgba(130,168,251,1) 100%);   
      border-radius: 12px;
      filter: blur(1px);
      opacity: 0.7;
      z-index: -10;
      width: 228px;
      height: 188px;
    }

    ::after {
      content: "";
      position: absolute;
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border-radius: 12px;
      z-index: -9;
      width: 218px;
      height: 168px;
    }
    
`

export default Container;
export { ClientPersonalInfo, CarIcon }
