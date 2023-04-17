import React from "react";
import ContainerHome from '../../style/indexStyle';
import {CarRepairCard} from '../../components/CarRepairCard';

export { Page };

function Page() {
  return (
    <ContainerHome>
      <h1>Ultracar</h1>
      <CarRepairCard />
    </ContainerHome>
  );
}