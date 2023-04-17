import React from 'react'
import Container, {Title, PlusCircleIcon} from './style';
import { Link } from '../../renderer/Link'

function CarRepairCard() {
  return (
    <Link className="navitem" href="/findClient">
    <Container>
                 
        <Title>Novo Conserto</Title>
        <PlusCircleIcon />
    </Container>
    </Link>
  )
}

export default CarRepairCard
