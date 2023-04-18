import React from "react";
import ContainerHome, {CardContainer} from '../../style/indexStyle';
import CarRepairCard from '../../components/CarRepairCard';
import RepairListCard from '../../components/RepairListCard';

export { Page }

function Page() {
  
  return (
    <ContainerHome>
      <h1>Ultracar</h1>
      <CardContainer>
        <CarRepairCard />
        <RepairListCard />
      </CardContainer>
    </ContainerHome>
  );
}
