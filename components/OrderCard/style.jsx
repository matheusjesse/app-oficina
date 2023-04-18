import styled from 'styled-components';

const Container = styled.div`
        width: 360px;
        height: 480px;
        padding: 12px;
        background: rgb(71,9,121);
        background: linear-gradient(90deg, rgba(71,9,121,1) 1%, rgba(61,69,158,1) 50%, rgba(130,168,251,1) 100%);   
        color: white;
        border-radius: 18px;

`

const ClientContainer = styled.div`

`;

const ClientInfo = styled.p`
    font-weight: 600;
`

const Title = styled.span`
    font-size: 24px;
    font-weight: 600;
`

const OficinaContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    span {
        font-size: 18px;
        margin-top: 4px;
    }

    th {
        text-align: start;
    }

    tbody {
        height: 80px;
        overflow: scroll;
    }

    .totalText {
        text-align: end;
    }

    button {
        height: 28px;
        background-color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }
`;


export default Container;

export {
    Title,
    ClientContainer,
    ClientInfo,
    OficinaContainer,
}
