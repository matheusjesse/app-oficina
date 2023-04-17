import React from 'react'
import Container, {Text, Form} from './style';

function FindClientBar() {
  return (
    <Container>
        <Text>Achar Cliente</Text>
        <Form>
            <label for="clientName">
                Nome:
            <input type="text" id="clientName" name="clientName" />
            </label>
            <button type="button">Buscar</button>
        </Form>
        <Text>Ou</Text>
        <button type="button">Scanear QR Code</button>
    </Container>
  )
}

export default FindClientBar
