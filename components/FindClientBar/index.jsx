import React, { useContext, useState } from 'react'
import Container, {Text, Form} from './style';
import DataContext from "../../context/DataContext";
import { Link } from '../../renderer/Link';

function FindClientBar() {

    const {
        clientData,
        setCurrentClient,
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
        <div className="navMain">
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
        <span>Ou</span>
        <button 
            type="button"            
        >
            Scanear QR Code
        </button>
        </div>
        <Link className="navitem" href="/">
            <span className='navHome'>Início</span>
        </Link>
    </Container>
  )
}

export default FindClientBar
