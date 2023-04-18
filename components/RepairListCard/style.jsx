import styled from 'styled-components';
import {LinkAlt} from '@styled-icons/boxicons-regular'

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
    margin-left: 8px;

`
const LinkIcon = styled(LinkAlt)`
  color: black;
  width: 40px;
  height: 40px;
`

const Title = styled.h1`
    text-align: center;
`

export default Container;
export {Title, LinkIcon};
