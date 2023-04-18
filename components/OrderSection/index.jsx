import React, { useEffect, useState, useContext } from 'react'
import Container from './style';
import OrderCard from '../OrderCard';
import DataContext from "../../context/DataContext";
function OrderSection() {
  const [ordersData, setOrdersData] = useState([])
  const {
    mechanicOrder
  } = useContext(DataContext);

  useEffect(() => {
    // const localKey = localStorage.getItem("repairOrders");
    // if(!localKey) localStorage.setItem("repairOrders", "[]");
    // const localData = JSON.parse(localStorage.getItem("repairOrders"));
    setOrdersData(mechanicOrder);
  },[mechanicOrder])

  return (
    <Container>
      {
        ordersData.length > 0 && (
          ordersData.map((item, index) => 
            <OrderCard key={index} data={item}/>          
          )
        )
      }
    </Container>
  )
}

export default OrderSection;
