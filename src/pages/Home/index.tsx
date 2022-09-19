import React from 'react'
import expresso from '../../assets/expresso.svg'

import { Card } from '../../components/Card'

import { Container } from './styles'

const products = [
  {
    name: 'Expresso Americano',
    tags: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o trandicional',
    price: 9.99,
    image: expresso,
  },
  {
    name: 'Expresso Americano',
    tags: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o trandicional',
    price: 9.99,
    image: expresso,
  },
  {
    name: 'Expresso Americano',
    tags: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o trandicional',
    price: 9.99,
    image: expresso,
  },
  {
    name: 'Expresso Americano',
    tags: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o trandicional',
    price: 9.99,
    image: expresso,
  },
  {
    name: 'Expresso Americano',
    tags: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o trandicional',
    price: 9.99,
    image: expresso,
  },
  {
    name: 'Expresso Americano',
    tags: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o trandicional',
    price: 9.99,
    image: expresso,
  },
  {
    name: 'Expresso Americano',
    tags: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o trandicional',
    price: 9.99,
    image: expresso,
  },
  {
    name: 'Expresso Americano',
    tags: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o trandicional',
    price: 9.99,
    image: expresso,
  },
  {
    name: 'Expresso Americano',
    tags: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o trandicional',
    price: 9.99,
    image: expresso,
  },
  {
    name: 'Expresso Americano',
    tags: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o trandicional',
    price: 9.99,
    image: expresso,
  },
  {
    name: 'Expresso Americano',
    tags: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o trandicional',
    price: 9.99,
    image: expresso,
  },
  {
    name: 'Expresso Americano',
    tags: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o trandicional',
    price: 9.99,
    image: expresso,
  },
  {
    name: 'Expresso Americano',
    tags: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o trandicional',
    price: 9.99,
    image: expresso,
  },
  {
    name: 'Expresso Americano',
    tags: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o trandicional',
    price: 9.99,
    image: expresso,
  },
]

export const Home = () => {
  return (
    <Container>
      {products?.map((product) => (
        <Card
          key={product.name}
          name="Expresso Tradicional"
          tags={['tradicional']}
          image={expresso}
          price={99}
          description="O tradicional café feito com água quente e grãos moídos"
        />
      ))}
    </Container>
  )
}
