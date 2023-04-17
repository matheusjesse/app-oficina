import React,  { useContext } from 'react'
import Container, {ClientPersonalInfo} from './style';
import LogoImage from '../../assets/cabecalho.png';
import DataContext from "../../context/DataContext";

function ClientSection() {

    const {
        clientData,
        currentClient,
        setCurrentClient,
        notFound,
        setNotFound
    } = useContext(DataContext);
    
    const EmptySearch = () => {
        return(
          <div></div>
        )
      }

  return (    
    <Container>
        {
            notFound ? <EmptySearch /> :
            <>
                <ClientPersonalInfo>
                      <img src={LogoImage} alt="Utracar Logo" />
                      <span>{currentClient.nome}</span>
                </ClientPersonalInfo>
                <table title="Veículos do Cliente">
                    <thead>
                        <tr>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Ano</th>
                            <th>Placa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentClient.veiculos.map((item) =>(
                                <tr key={item.placa}>
                                    <td>{item.marca}</td>
                                    <td>{item.modelo}</td>
                                    <td>{item.ano}</td>
                                    <td>{item.placa}</td>
                                    <td>
                                        <button type="button">solicitar</button>
                                    </td>
                                </tr>                
                            ))
                        }
                          </tbody>                   
                        </table>
            </>
        }
    </Container>
  )
}

export default ClientSection
