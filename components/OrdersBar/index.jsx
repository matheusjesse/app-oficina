import React, { useState, useContext } from 'react'
import Container, {SearchIcon, Title} from './style';
import DataContext from "../../context/DataContext";

function OrdersBar() {
    const {
        setMechanicOrder
    } = useContext(DataContext);

    const [mechanicNameInput, setMechanicNameInput] = useState("")

    const findMechanic = () => {
        if (mechanicNameInput.length >= 4) {
            const localKey = localStorage.getItem("repairOrders");
            if(!localKey) localStorage.setItem("repairOrders", "[]");
            const localData = JSON.parse(localStorage.getItem("repairOrders"));
            const mechanicOrder = localData.filter(({mechanicName}) => mechanicName.toLowerCase().search(mechanicNameInput.toLowerCase()) > -1)
            console.log(mechanicOrder)
            setMechanicOrder(mechanicOrder);
            setMechanicNameInput("")
        }
        
    }

  return (
    <Container>
        <Title>Identificação de Consertos</Title>
        <label htmlFor="mechanicName">
            Nome do Mecânico:
            <input 
                type="text"
                id="mechanicName"
                name="mechanicName"
                value={mechanicNameInput}
                onChange={({target}) => setMechanicNameInput(target.value)}
            />
        </label>
        <button 
            type="button"
            onClick={findMechanic}
        >
            <SearchIcon />
        </button>
    </Container>
  )
}

export default OrdersBar
