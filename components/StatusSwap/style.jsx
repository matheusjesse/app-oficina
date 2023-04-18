import styled from 'styled-components';
import {Close} from '@styled-icons/ionicons-outline'

const Container = styled.div`
   position: fixed;
   background-color: red;
   width: 100vw;
   height: 100vh;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   top: 0;
   left: 0;
`
const CloseIcon = styled(Close)`
  color: black;
  width: 40px;
  height: 40px;
  cursor: pointer;
`
const IconContainer = styled.div`
    width: 300px;
    display: flex;
    justify-content: end;
`

const ClientContainer = styled.div`

`;

const ClientInfo = styled.p`
    
`

const Title = styled.span`

`

const OficinaContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
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

