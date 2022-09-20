import styled from 'styled-components'
import backgroundImage from '../../assets/Background.svg'

export const Container = styled.div`
  /* max-width: 70rem; */
  width: 100%;
  margin: 2.5rem auto;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  /* padding: 0.15rem; */

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 32px;
    color: ${(props) => props.theme['base-title']};
  }
`

export const Intro = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media (max-width: 1080px) {
    grid-template-columns: auto;
  }
  /* align-items: center; */
  /* justify-content: space-between; */
  /* gap: 2.5rem; */

  padding: 1rem 1.5rem;
  background-image: url(${backgroundImage});

  section {
    display: flex;
    gap: 3rem;
    flex-direction: column;
  }

  h1 {
    font-weight: 800;
    font-family: 'Baloo 2', sans-serif;
    font-size: 48px;
    color: ${(props) => props.theme['base-title']};
    line-height: 1.3;

    text-align: left;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-stretch: 100;

    line-height: 1.3;
    padding-top: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Hero = styled.div`
  @media (max-width: 1080px) {
    display: none;
  }
`

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1.5fr;
  /* align-items: center; */
  /* flex-wrap: wrap; */
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.45rem;

    color: ${(props) => props.theme['base-text']};

    &:nth-child(1) {
      svg {
        background-color: ${(props) => props.theme['yellow-dark']};
      }
    }

    &:nth-child(2) {
      svg {
        background-color: ${(props) => props.theme['base-text']};
      }
    }

    &:nth-child(3) {
      svg {
        background-color: ${(props) => props.theme.yellow};
      }
    }

    &:nth-child(4) {
      svg {
        background-color: ${(props) => props.theme.purple};
      }
    }

    svg {
      color: ${(props) => props.theme.white};
      border-radius: 100px;
      padding: 8px;
    }
  }
`

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  h2 {
    /* padding: 0 1rem; */
  }
`

export const ProductsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;
`
