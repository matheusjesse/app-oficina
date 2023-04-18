import React from 'react'
import Container, {Title, LinkIcon} from './style';
import { Link } from '../../renderer/Link';

function RepairListCard() {
  return (
    <Link className="navitem" href="/orders">
    <Container>                 
        <Title>Lista De Reparos</Title>
        <LinkIcon />
    </Container>
    </Link>
  )
}

export default RepairListCard
