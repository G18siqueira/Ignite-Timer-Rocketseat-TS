import styled from 'styled-components'

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
