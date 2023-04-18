import React, { useState } from 'react'
import Container, {SearchIcon, Title} from './style';

function OrdersBar() {
   
    const [mechanicNameInput, setMechanicNameInput] = useState("")

  return (
    <Container>
        <Title>Identificação de Consertos</Title>
        <label htmlFor="mechanicName">
            Nome do Mecânico:
            <input 
                type="text"
                id="mechanicName"
                name="mechanicName"
                onChange={({target}) => setMechanicNameInput(target.value)}
            />
        </label>
        <button type="button">
            <SearchIcon />
        </button>
    </Container>
  )
}

export default OrdersBar
