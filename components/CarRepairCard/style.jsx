import styled from 'styled-components';
import {PlusCircle} from '@styled-icons/octicons'

const Container = styled.div`
    width: 228px;
    height: 308px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    border-radius: 12px;    
    
    margin-right: 8px;

    h1 {
      color: white;
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
      height: 308px;
    }

    ::after {
      content: "";
      position: absolute;
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border-radius: 12px;
      z-index: -9;
      width: 218px;
      height: 290px;
    }

    :hover {
      width: 228px;
      height: 308px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      align-content: center;
      border-radius: 14px;    
      box-shadow: -1px 0px 8px gray;
      margin-right: 8px;
    }
`
const PlusCircleIcon = styled(PlusCircle)`
  color: white;
  width: 40px;
  height: 40px;
`

const Title = styled.h1`
    text-align: center;
    color: white;
    
`

export default Container;
export {Title, PlusCircleIcon};
