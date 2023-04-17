import React from "react";
import Container from './style';
import FindClientBar from '../../components/FindClientBar';
import ClientSection from '../../components/ClientSection';

export { Page };

function Page() {
  return (
    <Container>
      <FindClientBar />
      <ClientSection />
    </Container>
  );
}
