import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Card } from '../../components/Card'

import {
  Container,
  ProductsContainer,
  ProductsContent,
  Intro,
  Hero,
  Items,
} from './styles'

import expresso from '../../assets/expresso.svg'
import heroImg from '../../assets/hero.svg'

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
      <Intro>
        <section>
          <header>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>

            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </header>

          <Items>
            <span>
              <ShoppingCart size={32} weight="fill" />
              Compra simples e segura
            </span>
            <span>
              <Package size={32} weight="fill" />
              Embalagem mantém o café intacto
            </span>
            <span>
              <Timer size={32} weight="fill" />
              Entrega rápida e rastreada
            </span>
            <span>
              <Coffee size={32} weight="fill" />O café chega fresquinho até você
            </span>
          </Items>
        </section>

        <Hero>
          <img src={heroImg} alt="Hero" />
        </Hero>
      </Intro>

      <ProductsContainer>
        <h2>Nossos cafés</h2>
        <ProductsContent>
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
        </ProductsContent>
      </ProductsContainer>
    </Container>
  )
}
