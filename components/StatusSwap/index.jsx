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
        function addZero(i) {
            if (i < 10) {i = "0" + i}
            return i;
        }
        const date = new Date();
        // Hora
        const h = addZero(date.getHours());
        const m = addZero(date.getMinutes());
        const s = addZero(date.getSeconds());
        const time = h + ":" + m + ":" + s;
        //DATE
        const yearCurrent = date.getFullYear();
        const month = date.getMonth()+1;
        const dia = date.getDate();
        const resultDate = dia+"/"+month+"/"+yearCurrent;
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
                date: resultDate,
                hour:  time,
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
        <IconContainer>
            <CloseIcon onClick={closeOrder}/>
        </IconContainer>
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
            <span>{`Finalização: ${data.status}`}</span> 
            <span>{`Início: ${data.startDate.date} | ${data.startDate.hour}`}</span>     
            <span>{`Total: R$ ${data.total.toFixed(2)}`}</span>
            {
                data.status === "finalizado" && (
                    <span>{`Finalização: ${data.finishDate.date} | ${data.finishDate.hour}`}</span>     
                )
            }
            {
                data.status === "pendente" && (
                    <button 
                        type="button"
                        onClick={finishOrderButton}
                    >
                        Finalizar
                    </button>
                )
            }
        </ OficinaContainer>
    </Container>
  )
}

export default StatusSwap;