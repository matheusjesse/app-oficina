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
                <table title="Veículos do Cliente" className="tableTag">
                    <thead>
                        <tr>
                            <th className='thTag'>Marca</th>
                            <th className='thTag'>Modelo</th>
                            <th className='thTag'>Ano</th>
                            <th className='thTag'>Placa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentClient.veiculos.map((item) =>(
                                <tr key={item.placa}>
                                    <td className="tdTag">{item.marca}</td>
                                    <td className="tdTag">{item.modelo}</td>
                                    <td className="tdTag">{item.ano}</td>
                                    <td className="tdTag">{item.placa}</td>
                                    <td className="tdTag">
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
