import styled from 'styled-components'

// Main
export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

/*********************************************************/
/*********************************************************/
// Div Container Count Down
export const CountDownContainer = styled.div`
  display: flex;
  gap: 1rem;
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  span {
    background-color: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`
// Separador
export const Separator = styled.div`
  display: flex;
  justify-content: center;
  width: 4rem;
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
  overflow: hidden;
`

/*********************************************************/
/*********************************************************/
// Estilo Button
export const BaseCountDownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  color: ${(props) => props.theme['gray-100']};
  font-weight: bold;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  svg {
    polygon {
      stroke: ${(props) => props.theme['gray-100']};
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountDownButton = styled(BaseCountDownButton)`
  background-color: ${(props) => props.theme['green-500']};

  &:hover {
    &:not(:disabled) {
      background-color: ${(props) => props.theme['green-700']};
    }
  }
`
export const StopCountDownButton = styled(BaseCountDownButton)`
  background-color: ${(props) => props.theme['red-500']};

  &:hover {
    &:not(:disabled) {
      background-color: ${(props) => props.theme['red-700']};
    }
  }
`
