import styled from 'styled-components';
import {Close} from '@styled-icons/ionicons-outline'

const Container = styled.div`
   position: fixed;
   background-color: white;
   width: 100vw;
   height: 100vh;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   top: 0;
   left: 0;

   .containerSection {
        width: 400px;
        height: 640px;
        padding: 12px;
        background: rgb(71,9,121);
        background: linear-gradient(90deg, rgba(71,9,121,1) 1%, rgba(61,69,158,1) 50%, rgba(130,168,251,1) 100%);   
        color: white;
        border-radius: 18px;
        p {
            font-size: 18px;
        }
    }
`
const CloseIcon = styled(Close)`
  color: white;
  width: 40px;
  height: 40px;
  cursor: pointer;
`
const IconContainer = styled.div`
    width: 370px;
    display: flex;
    justify-content: end;
`

const ClientContainer = styled.div`
    width: 320px;
`;

const ClientInfo = styled.p`
    
`

const Title = styled.span`
    font-weight: 700;
    font-size: 32px;
`

const OficinaContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    input {
        border: none;
        border-radius: 6px;
        height: 24px;
        margin-bottom: 4px;
        padding-left: 2px;
    }
    .buttonAdd {
        width: 70px;
        height: 26px;
        margin-left: 2px;
        border-radius: 6px;
        border: none;
        cursor: pointer;
    }

    table {
        border-spacing: 0;
        height: 90px;
        overflow: scroll;
    }

    .tableBody {
        height: 100px;
        overflow: scroll;
    }

    th {
        text-align: start;
    }

    tbody, tr, td {
        border-top: 1px solid white;
        
        border-spacing: 0;
        height: 29px;
    }

    .totalText {
        text-align: end;
        margin-top: 12px;
        font-weight: 700;
        font-size: 20px;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;        
    }

    a button {
        height: 38px;
        width: 130px;        
        border-radius: 6px;
        border: none;
        cursor: pointer;
        font-size: 20px;
        margin-top: 16px;
    }
`;




export default Container;
export {    
    CloseIcon,
    Title,
    ClientContainer,
    ClientInfo,
    OficinaContainer,
    IconContainer
}

