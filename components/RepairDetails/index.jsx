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
function RepairDetails() {
    
    const {
        currentClient,
        carSelected,
        setdetailPage,
        setCarSelected,
        productsData
    } = useContext(DataContext);

    const [productInput, setProductInput] = useState("");
    const [orderCart, setOrderCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [workCommission, setWorkCommission] = useState(0);
    const [comissionDisable, setComissionDisabled] = useState(false);
    const [descriptionInput, setDescriptionInput] = useState("");

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
        if(value !== ""){
            setWorkCommission(parseFloat(value));
        }
    }

    const totalValueCount = () => {
        setComissionDisabled(true);
        setTotalPrice(totalPrice + workCommission)
    }

  return (
    <Container>
        <IconContainer>
            <CloseIcon onClick={closeDetails}/>
        </IconContainer>
        <ClientContainer>
            <Title>Cliente</Title>
            <ClientInfo>{`Nome${currentClient.nome}`}</ClientInfo>
            <ClientInfo>{`Carro${carSelected.modelo}`}</ClientInfo>
            <ClientInfo>{`Carro${carSelected.ano}`}</ClientInfo>
        </ClientContainer>
        <OficinaContainer>
            <Title>Oficina</Title>
            <label htmlFor="mechanicName">
                Mecânico(a):
                <input type="text" id="mechanicName" name="mechanicName" />
            </label>
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
            >
                Adicionar
            </button>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Preço</th>
                    </tr>
                </thead>
                <tbody>
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
            <label htmlFor="workCommission">
                Mão de obra
                <input 
                    type="number" 
                    min="0.00" 
                    id="workCommission"
                    name="workCommission"
                    step="0.01"
                    disabled={comissionDisable}
                    onChange={({target}) => totalWorkComission(target.value)}
                />
            </label>
            <button 
                type="button"
                onClick={totalValueCount}
            >
                Confirmar
            </button>
            <label htmlFor="descriptionInfo">
                Deiscrição Adicional
                <input 
                    type="text" 
                    id="descriptionInfo" 
                    label="descriptionInfo"
                    onChange={({target}) => setDescriptionInput(target.value)}
                />
            </label>
            <span>{`Total: R$ ${totalPrice.toFixed(2)}`}</span>
        </OficinaContainer>
    </Container>
  )
}

export default RepairDetails
