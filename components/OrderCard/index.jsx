import React, { useContext } from 'react'
import Container, {
    Title,
    ClientContainer,
    ClientInfo,
    OficinaContainer,
} from './style';
import StatusSwap from '../StatusSwap';
import DataContext from "../../context/DataContext";

function OrderCard({data}) {
    
    const {
        statusSwapEnabled, 
        setStatusSwapEnabled
    } = useContext(DataContext);
    
    const editOrder = () => {
        setStatusSwapEnabled(true);
    }
  return (
    <Container>
        <ClientContainer>
            <Title>Cliente</Title>
            <ClientInfo>{`Nome: ${data.name}`}</ClientInfo>
            <ClientInfo>{`Carro: ${data.car}`}</ClientInfo>
            <ClientInfo>{`Carro: ${data.year}`}</ClientInfo>
        </ClientContainer>
        <OficinaContainer>
            <Title>Oficina</Title>
            <span>{`Mecânico(a): ${data.mechanicName}`}</span>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Peça</th>
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
            <span>{`Mão de obra:  R$ ${data.workCommission.toFixed(2)}`}</span>  
            <span className='descriptionContainer'>{`Deiscrição Adicional: ${data.description}`}</span>     
            <span>{`Finalização: ${data.status}`}</span> 
            <span>{`Início: ${data.startDate.date} | ${data.startDate.hour}`}</span>     
            {
                data.status === "finalizado" && (
                    <span>{`Finalização: ${data.finishDate.date} | ${data.finishDate.hour}`}</span>     
                    )
            }
            <span className='totalText'>{`Total: R$ ${data.total.toFixed(2)}`}</span>
            {
                data.status === "pendente" && (
                    <button 
                        type="button"
                        onClick={editOrder}
                    >
                        Editar
                    </button>
                )
            }
            {
                statusSwapEnabled && <StatusSwap data={data}/>
            }
        </ OficinaContainer>
    </Container>
  )
}

export default OrderCard;
