import { GrPlay } from 'react-icons/gr'
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  Separator,
} from './styles'
const Home = () => {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input type="text" id="task" />
          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount" />
          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <button type="submit">
          <GrPlay size={24} />
          Começar
        </button>
      </form>
    </HomeContainer>
  )
}

export default Home
