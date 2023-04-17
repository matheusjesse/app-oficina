import React, { useContext, useState } from 'react'
import Container, {Text, Form} from './style';
import DataContext from "../../context/DataContext";

function FindClientBar() {

    const {
        clientData,
        setCurrentClient,
        notFound,
        setNotFound
    } = useContext(DataContext);

    const [nameInput, setNameInput] = useState("");
    

    const findClient = (event) => {
        event.preventDefault();
        const client = clientData.find((item) => item.nome.toLowerCase() === nameInput.toLowerCase());
        if(client) {
            setCurrentClient(client);
            setNotFound(false);
        } else {
            setNotFound(true);
        }
    }

    

  return (
    <Container>
        <Text>Achar Cliente</Text>
        <Form>
            <label htmlFor="clientName">
                Nome:
            <input 
                type="text" 
                id="clientName" 
                name="clientName"
                onChange={ ({target}) => setNameInput(target.value)}
            />
            </label>
            <button 
                type="button"
                onClick={ findClient }
            >
                Buscar
            </button>
        </Form>
        <Text>Ou</Text>
        <button 
            type="button"            
        >
            Scanear QR Code
        </button>
    </Container>
  )
}

export default FindClientBar
