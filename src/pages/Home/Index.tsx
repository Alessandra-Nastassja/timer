import { Play } from "phosphor-react";

import { CountdownContainer, FormContainer, HomeContainer, MinutesArountInput, Separator, StartCountdownButton, TaskInput } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput 
            id="task" 
            type="text"
            placeholder="Dê um nome para o seu projeto" />

          <label htmlFor="minutesAmount">durante</label>
          <MinutesArountInput type="number" id="minutesAmount" placeholder="00"/>

          <span>minutos.</span>
        </FormContainer>

          <CountdownContainer>
            <span>0</span>
            <span>0</span>
            <Separator>:</Separator>
            <span>0</span>
            <span>0</span>
          </CountdownContainer>

          <StartCountdownButton type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}