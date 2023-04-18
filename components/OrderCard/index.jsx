import React from 'react'
import Container, {
    Title,
    ClientContainer,
    ClientInfo,
    OficinaContainer,
} from './style';

function OrderCard({data}) {
   
  return (
    <Container>
        <ClientContainer>
            <Title>Cliente</Title>
            <ClientInfo>{`Nome${data.name}`}</ClientInfo>
            <ClientInfo>{`Carro${data.car}`}</ClientInfo>
            <ClientInfo>{`Carro${data.year}`}</ClientInfo>
        </ClientContainer>
        <OficinaContainer>
            <Title>Oficina</Title>
            <span>{`Mecânico(a): ${data.mechanicName}`}</span>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.parts.length > 0 && (
                            data.parts.map((element) =>
                                <tr key={element.name}>
                                    <td>{element.name}</td>
                                    <td>{`R$ ${element.price.toFixed(2)}`}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
            <span>{`Mão de obra: ${data.workCommission}`}</span>  
            <span>{`Deiscrição Adicional: ${data.description}`}</span>     
            <span>{`Total: R$ ${data.total.toFixed(2)}`}</span>
        </ OficinaContainer>
    </Container>
  )
}

export default OrderCard;
