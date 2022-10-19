import styled from 'styled-components'

export const Container = styled.div`
  max-width: 16rem;
  max-height: 19.375rem;
  width: auto;
  height: auto;
  padding: 0 1rem;

  flex: 1 16%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;

  border-radius: 0.25rem 2rem;

  background: ${(props) => props.theme['base-button']};

  header {
    margin-top: -1.25rem;

    div {
      background: ${(props) => props.theme['yellow-light']};
      width: 81px;
      margin: 0 auto;
      border-radius: 6.25rem;
      margin-top: 0.625rem;
      padding: 4px 8px;

      > p {
        color: ${(props) => props.theme['yellow-dark']};
        font-size: 0.625rem;
        text-align: center;
        text-transform: uppercase;

        font-weight: 700;
      }
    }
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    max-width: 13.5rem;

    strong {
      font-size: 20px;
      font-weight: 700;
      font-family: 'Baloo 2', sans-serif;
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      color: ${(props) => props.theme['base-label']};
      font-size: 0.875rem;
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 33px 24px 24px 20px;
    gap: 8px;

    span {
      font-size: 14px;
      font-weight: 400;
      font-family: 'Roboto', sans-serif;
      color: ${(props) => props.theme['base-title']};

      > strong {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
        font-size: 24px;
      }
    }

    input {
      max-width: 72px;
      height: 38px;
      border: 0;
      border-radius: 8px;
      font-weight: bold;
      font-size: 1.125rem;
      padding: 0 0.5rem;
      color: ${(props) => props.theme['base-button']};

      text-align: center;
    }

    button {
      background: ${(props) => props.theme['purple-dark']};
      color: ${(props) => props.theme.white};
      padding: 8px;
      height: 38px;
      border: 0;
      border-radius: 6px;
    }
  }
`
