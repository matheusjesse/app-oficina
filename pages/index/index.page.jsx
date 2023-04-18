import React from "react";
import ContainerHome, {CardContainer, imageContainer} from '../../style/indexStyle';
import CarRepairCard from '../../components/CarRepairCard';
import RepairListCard from '../../components/RepairListCard';
import LogoUltracar from '../../assets/logoUltracar.png';

export { Page }

function Page() {
  
  return (
    <ContainerHome>
      <imageContainer>
        <img src={LogoUltracar} alt="LogoUltracar" />
      </imageContainer>
      <CardContainer>
        <CarRepairCard />
        <RepairListCard />
      </CardContainer>
    </ContainerHome>
  );
}
