import { Container, Form } from './styles'

import { Button } from '../../components/Button'
import { TextInput } from '../../components/TextInput'

export function SignUp() {
  return (
    <Container>
      
      <h1>
        <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.0318 0.216492L43.4349 12.0918V35.8425L22.0318 47.7179L0.628698 35.8425V12.0918L22.0318 0.216492Z" fill="#065E7C"/>
        </svg>
        
        food.exp
      </h1>

      <Form>
        <h2>Crie sua conta</h2>

        <TextInput 
          caption='Seu nome' 
          placeholder='Maria da Silva'
        />
        <TextInput 
          caption='Email' 
          placeholder='exemplo@exemplo.com.br'
        />
        <TextInput 
          caption='Senha' 
          placeholder='Mínimo 6 caracteres'
        />
        
        <Button 
          title="Criar conta"
        />

        <a href="/signin">Já tenho uma conta</a>

      </Form>
    </Container>
  )
}