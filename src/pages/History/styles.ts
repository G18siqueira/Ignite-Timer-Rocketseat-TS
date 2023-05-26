import styled from 'styled-components'

// Main
export const HistoryContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 3.5rem;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
`
/*********************************************************/
/*********************************************************/
// Div Container para o Table
export const HistoryList = styled.section`
  flex: 1;
  overflow: auto;
  margin: 2rem 0 0;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 37.5rem;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      color: ${(props) => props.theme['gray-100']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;
      text-align: left;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`
/*********************************************************/
/*********************************************************/
// Configuração de cor para o status
const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

interface StatusProps {
  statuscolor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${(props) =>
      props.theme[STATUS_COLORS[props.statuscolor]]};
    border-radius: 50%;
  }
`
/*********************************************************/
/*********************************************************/
