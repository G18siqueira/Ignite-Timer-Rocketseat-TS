import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 3rem;
      height: 3rem;
      color: ${(props) => props.theme['gray-100']};
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      transition: all 0.1s ease-in-out;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }

      &:focus {
        box-shadow: none;
      }

      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
