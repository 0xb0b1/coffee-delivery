import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 104px;
`

export const Info = styled.div`
  display: flex;
  gap: 12px;

  button {
    border: 0;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px;
    border-radius: 6px;

    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};

    &.add-to-cart-btn {
      background: ${(props) => props.theme['yellow-light']};
    }
  }
`
