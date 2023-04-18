import React,  { useContext, useEffect, useState } from 'react'
import Container, {
    CloseIcon,
    Title,
    ClientContainer,
    ClientInfo,
    OficinaContainer,
    IconContainer
} from './style';
import DataContext from "../../context/DataContext";
import { Link } from '../../renderer/Link';
import { dateInfo, hourInfo } from '../../helpers/dateHourFunctions';

function StatusSwap({data}) {

    const {
        setStatusSwapEnabled
    } = useContext(DataContext);

    const closeOrder = () => {
        setStatusSwapEnabled(false);
    }


    useEffect(() => {
        const localKey = localStorage.getItem("repairOrders");
        if(!localKey) {
            localStorage.setItem("repairOrders", "[]")
            setStatusSwapEnabled(false);
        };        
    },[])

    const finishOrderButton = () => {
        const { 
            name,
            car,
            year,
            id,
            parts,
            workCommission,
            mechanicName,
            description,
            total
        } = data;
        
        const orderData = {
            id,
            name,
            car,
            year,
            parts,
            workCommission,
            mechanicName,
            description,
            startDate: {
                date: data.startDate.date,
                hour:  data.startDate.hour,
            },
            finishDate: {
                date: dateInfo(),
                hour:  hourInfo(),
            },          
            status: "finalizado",
            total,
        }
        const localKey = localStorage.getItem("repairOrders")
        if(!localKey) localStorage.setItem("repairOrders", "[]");

        const localData = JSON.parse(localStorage.getItem("repairOrders"));
        const removedOldData = localData.filter((item) => item.id !== data.id);

        const newData = [...removedOldData, orderData];
        localStorage.setItem("repairOrders", JSON.stringify(newData));
        closeOrder();
    }
    
  return (
    <Container>
        <div className="containerSection">
        <IconContainer>
            <CloseIcon onClick={closeOrder}/>
        </IconContainer>
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
            <span>{`Mão de obra: R$ ${data.workCommission.toFixed(2)}`}</span>  
            <span className='descriptionContainer'>{`Deiscrição Adicional: ${data.description}`}</span>     
            <span>{`Finalização: ${data.status}`}</span> 
            <span>{`Início: ${data.startDate.date} | ${data.startDate.hour}`}</span>     
            <span className='totalText'>{`Total: R$ ${data.total.toFixed(2)}`}</span>
            {
                data.status === "finalizado" && (
                    <span>{`Finalização: ${data.finishDate.date} | ${data.finishDate.hour}`}</span>     
                )
            }
            {
                data.status === "pendente" && (
                    <Link className="navitem" href="/">
                        <button 
                            type="button"
                            onClick={finishOrderButton}
                        >
                            Finalizar
                        </button>
                    </Link>
                )
            }
        </ OficinaContainer>
        </div>
    </Container>
  )
}

export default StatusSwap;
