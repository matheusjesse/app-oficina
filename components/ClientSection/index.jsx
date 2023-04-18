import React,  { useContext } from 'react'
import Container, {ClientPersonalInfo, CarIcon} from './style';
import LogoImage from '../../assets/cabecalho.png';
import DataContext from "../../context/DataContext";
import RepairDetails from '../RepairDetails'
function ClientSection() {
    
    const {
        currentClient,
        notFound,
        setCarSelected,
        carSelected,
        detailPage,
        setdetailPage
    } = useContext(DataContext);
    
    const EmptySearch = () => {
        return(
          <div className='emptySearch'>
            <div>Digite nome do cliente a cima</div>
            <CarIcon />
          </div>
        )
    }

    const redirectDetails = (item) => {
        setCarSelected(item);
        setdetailPage(true);
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
                                        <button 
                                            type="button"
                                            onClick={() => redirectDetails(item)}
                                        >
                                            Solicitar Reparo
                                        </button>
                                    </td>
                                </tr>                
                            ))
                        }
                    </tbody>                   
                </table>
            </>
        }
        { detailPage && <RepairDetails />}
    </Container>
  )
}

export default ClientSection
