import React from 'react'
import Container, {ClientPersonalInfo} from './style';
import LogoImage from '../../assets/cabecalho.png';

function ClientSection() {

  return (
    <Container>
        <ClientPersonalInfo>
            <img src={LogoImage} alt="Utracar Logo" />
            <span>Nome do Client</span>
        </ClientPersonalInfo>
        <table>
            <span>Veículos do Cliente</span>
            <tr>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Ano</th>
                <th>Placa</th>
            </tr>
            <tr>
                <td>Ford</td>
                <td>EcoSport</td>
                <td>2007</td>
                <td>asd1235</td>
                <button type="button">solicitar</button>
            </tr>
        </table>
    </Container>
  )
}

export default ClientSection
