import styled from 'styled-components';
import {Car} from '@styled-icons/boxicons-regular'

const Container = styled.div`
    max-width: 80vw;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 22px;
    margin-top: 40px;

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


export default Container;

export { CarIcon }
