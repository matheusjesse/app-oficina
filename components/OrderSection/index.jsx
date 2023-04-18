import React, { useEffect, useState, useContext } from 'react'
import Container, {CarIcon} from './style';
import OrderCard from '../OrderCard';
import DataContext from "../../context/DataContext";
function OrderSection() {
  const [ordersData, setOrdersData] = useState([])
  const {
    mechanicOrder
  } = useContext(DataContext);

  useEffect(() => {
    setOrdersData(mechanicOrder);
  },[mechanicOrder])

  
  const EmptySearch = () => {
    return(
      <div className='emptySearch'>
        <div>Digite nome do mecânico(a) a cima</div>
        <CarIcon />
      </div>
    )
  }

  return (
    <Container>
      {
        ordersData.length === 0 ? <EmptySearch /> : (
          ordersData.map((item, index) => 
            <OrderCard key={index} data={item}/>          
          )
        )
      }
    </Container>
  )
}

export default OrderSection;
