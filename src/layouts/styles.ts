import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 92.5rem;
  margin: 0 auto;
  background: ${(props) => props.theme.background};
  padding: 1rem;
  display: flex;
  flex-direction: column;
`
