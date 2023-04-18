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
import { Link } from '../../renderer/Link'
import { dateInfo, hourInfo } from '../../helpers/dateHourFunctions';

function RepairDetails() {
    const {
        currentClient,
        carSelected,
        setdetailPage,
        setCarSelected,
        productsData,
    } = useContext(DataContext);
    
    const [productInput, setProductInput] = useState("");
    const [orderCart, setOrderCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [workCommission, setWorkCommission] = useState(0);
    const [comissionDisabled, setComissionDisabled] = useState(false);
    const [descriptionInput, setDescriptionInput] = useState("");
    const [confirmationDisabled, setConfirmationDisabled] = useState(true);
    const [mechanicName, setMechanicName] = useState("");
    const closeDetails = () => {
        setCarSelected({});
        setdetailPage(false);
    }

    const addToCart = () => {
        const { carParts } = productsData;
        const partName = productInput.toLowerCase();
        const part = carParts.find(({name}) => name.toLowerCase().search(partName) > -1)
        if (orderCart.length === 0) {
            setOrderCart([
                part
            ])
        }
        const checkDouble = orderCart.map(({name}) => name === part.name).find((element) => element === true);
        if(checkDouble === undefined) {
            setOrderCart([
                ...orderCart,
                part
            ])
        }
    }

    useEffect(() => {
        let total = 0;
        orderCart.forEach((item) => total += parseFloat(item.price))
        setTotalPrice(total + workCommission)
    }, [orderCart])    

    const totalWorkComission = (value) => {
        if(value !== "" ) setWorkCommission(parseFloat(value));
    }

    const totalValueCount = () => {
        if(workCommission > 0) {
            setComissionDisabled(true);
            setTotalPrice(totalPrice + workCommission)
        }        
    }

    const finishorder = () => {
        const { nome } = currentClient;
        const { modelo, ano} = carSelected;
        const orderData = {
            id: Math.floor(Math.random() * 100000) + 1,
            name: nome,
            car: modelo,
            year: ano,
            parts: orderCart,
            workCommission,
            mechanicName,
            description: descriptionInput,
            startDate: {
                date: dateInfo(),
                hour:  hourInfo(),
            },            
            status: "pendente",
            total: totalPrice,
        }
        const localKey = localStorage.getItem("repairOrders")
        if(!localKey) localStorage.setItem("repairOrders", "[]");

        const localData = JSON.parse(localStorage.getItem("repairOrders"));
        const newData = [...localData, orderData];
        localStorage.setItem("repairOrders", JSON.stringify(newData));
        closeDetails();
    }

    useEffect(() => {
        setConfirmationDisabled(true)
        const validMechanicName = mechanicName.length > 3;
        const comissionValidation = comissionDisabled === true;
        if(validMechanicName && comissionValidation) {
            setConfirmationDisabled(!confirmationDisabled);
        }
    }, [comissionDisabled, mechanicName])   

  return (
    <Container>
        <div className="containerSection">
        <IconContainer>
            <CloseIcon onClick={closeDetails}/>
        </IconContainer>
        <ClientContainer>
            <Title>Cliente</Title>
            <ClientInfo>{`Nome: ${currentClient.nome}`}</ClientInfo>
            <ClientInfo>{`Carro: ${carSelected.modelo}`}</ClientInfo>
            <ClientInfo>{`Carro: ${carSelected.ano}`}</ClientInfo>
        </ClientContainer>
        <OficinaContainer>
            <Title>Oficina</Title>
            <label htmlFor="mechanicName">
                Mecânico(a)*:
                <input 
                    type="text"
                    id="mechanicName"
                    name="mechanicName"
                    value={mechanicName}
                    onChange={({target}) => setMechanicName(target.value)}
                />
            </label>
            <div className="partsAddSection">       
                <label htmlFor="products">
                    Peças:
                    <input
                        type="text"
                        id="products"
                        name="products"
                        onChange={({target}) => setProductInput(target.value)} 
                    />
                </label>
                <button
                    type="button"
                    onClick={addToCart}
                    className='buttonAdd'
                >
                    Adicionar
                </button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Preço</th>
                    </tr>
                </thead>
                <tbody className='tableBody'>
                    {
                        orderCart.length > 0 && (
                            orderCart.map((element) =>
                                <tr key={element.name}>
                                    <td>{element.name}</td>
                                    <td>{`R$ ${element.price.toFixed(2)}`}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
            <div>
                <label htmlFor="workCommission" className='commissionLabel'>
                    Mão de obra*
                    <input 
                        type="number"
                        min="0.00"
                        id="workCommission"
                        name="workCommission"
                        step="0.01"
                        disabled={comissionDisabled}
                        onChange={({target}) => totalWorkComission(target.value)}
                    />
                </label>
                <button
                    type="button"
                    onClick={totalValueCount}
                    disabled={comissionDisabled}
                    className='buttonAdd'
                >
                    Confirmar
                </button>
            </div>
            <label htmlFor="descriptionInfo">
                Deiscrição Adicional
                <input 
                    type="text"
                    id="descriptionInfo"
                    label="descriptionInfo"
                    onChange={({target}) => setDescriptionInput(target.value)}
                />
            </label>
            <span className="totalText">{`Total: R$ ${totalPrice.toFixed(2)}`}</span>
            <Link className="navitem" href="/">
                <button
                    type="button"
                    disabled={confirmationDisabled}
                    onClick={finishorder}
                >
                    Confirmar
                </button>
            </Link>
        </OficinaContainer>
        </div>
    </Container>
  )
}

export default RepairDetails
