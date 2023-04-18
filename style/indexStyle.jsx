import styled from 'styled-components';

const ContainerHome = styled.div`
    width: 100vw;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1{
        color: black;
    }

    img{
        margin-top: -98px;
        width: 400px;
        height: 220px;
    }
`

const CardContainer = styled.div`
    display: flex;
`
const ImageContainer = styled.div`
    
`

export default ContainerHome;

export {CardContainer, ImageContainer}

