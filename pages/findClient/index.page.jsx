import React from "react";
import Container from './style';
import FindClientBar from '../../components/FindClientBar';

export { Page };

function Page() {
  return (
    <Container>
      <FindClientBar />
      <h1>FindClient</h1>
    </Container>
  );
}
