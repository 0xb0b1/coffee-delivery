import React from 'react'
import { ShoppingCart } from 'phosphor-react'
import { Container } from './styles'

type CardType = {
  image: string
  tags: string[]
  name: string
  description: string
  price: number
}

export const Card = ({
  image,
  tags = [],
  name,
  description,
  price,
}: CardType) => {
  return (
    <Container>
      <header>
        <img src={image} alt="" loading="lazy" />
        {tags.map((item) => (
          <div key={item}>
            <p>{item}</p>
          </div>
        ))}
      </header>

      <section>
        <strong>{name}</strong>
        <p>{description}</p>
      </section>

      <footer>
        <span>
          R$ <strong>9.99</strong>
        </span>
        <input min={1} type="number" placeholder="1" />
        <button title="add-to-card">
          <ShoppingCart weight="fill" size={22} />
        </button>
      </footer>
    </Container>
  )
}
