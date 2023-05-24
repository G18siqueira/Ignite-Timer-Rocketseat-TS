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
// Div Form Container
export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 100%;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
`

/*********************************************************/
/*********************************************************/
// Estilo base dos inputs
const BaseInput = styled.input`
  height: 2.5rem;
  background-color: transparent;
  color: ${(props) => props.theme['gray-100']};
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`
// Input Task
export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
// Input Minutos
export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
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
export const StartCountDownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  background-color: ${(props) => props.theme['green-500']};
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

  &:hover {
    &:not(:disabled) {
      background-color: ${(props) => props.theme['green-700']};
    }
  }
`
