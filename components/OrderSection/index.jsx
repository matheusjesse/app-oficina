import React, { useEffect, useState } from 'react'
import Container from './style';
import OrderCard from '../OrderCard';

function OrderSection() {
  const [ordersData, setOrdersData] = useState([])

  useEffect(() => {
    const localKey = localStorage.getItem("repairOrders");
  if(!localKey) localStorage.setItem("repairOrders", "[]");
  const localData = JSON.parse(localStorage.getItem("repairOrders"));
  setOrdersData(localData);
  },[])

  return (
    <Container>
      {
        ordersData.length > 0 && (
          ordersData.map((item) => 
            <OrderCard data={item}/>          
          )
        )
      }
    </Container>
  )
}

export default OrderSection;
