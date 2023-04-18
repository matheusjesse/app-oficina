import React from "react";
import Container from './style';
import OrdersBar from '../../components/OrdersBar';
import OrderSection from '../../components/OrderSection';

export { Page }

function Page() {

  return (
    <Container>
        <OrdersBar />
        <OrderSection />     
    </Container>
  );
}
