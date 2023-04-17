import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    margin-top: 38px;
    th {
        text-align: start;
        width: 148px;
    }
`

const ClientPersonalInfo = styled.div`
    border: 1px solid black;
    width: 228px;
    height: 168px;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
    flex-direction: column;
    img {
        width: 108px;
        height: 108px;
    }
`

export default Container;
export { ClientPersonalInfo }
