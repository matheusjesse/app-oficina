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
    border-radius: 22px;
    border: 1px solid black;

`
const PlusCircleIcon = styled(PlusCircle)`
  color: black;
  width: 40px;
  height: 40px;
`

const Title = styled.h1`
    text-align: center;
`

export default Container;
export {Title, PlusCircleIcon};
