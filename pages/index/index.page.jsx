import React from "react";
import ContainerHome, {CardContainer, ImageContainer} from '../../style/indexStyle';
import CarRepairCard from '../../components/CarRepairCard';
import RepairListCard from '../../components/RepairListCard';
import LogoUltracar from '../../assets/logoUltracar.png';

export { Page }

function Page() {
  
  return (
    <ContainerHome>
      <ImageContainer>
        <img src={LogoUltracar} alt="LogoUltracar" />
      </ImageContainer>
      <CardContainer>
        <CarRepairCard />
        <RepairListCard />
      </CardContainer>
    </ContainerHome>
  );
}
